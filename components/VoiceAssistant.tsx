
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality, Type, FunctionDeclaration } from "@google/genai";

// Helper to safely get Swal
const getSwal = () => {
  return (window as any).Swal;
};

// Mock database
const COURTS = ['Cancha Valencia', 'Cancha Madrid', 'Cancha Barcelona'];
let RESERVATIONS = [
  { id: '1', court: 'Cancha Valencia', date: '2024-10-28', time: '18:00', whatsapp: '5512345678' }
];

export const VoiceAssistant = () => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  
  // Audio Refs
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const inputSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const outputNodeRef = useRef<GainNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const cleanupRef = useRef<boolean>(false);

  useEffect(() => {
    return () => {
      cleanupRef.current = true;
      stopSession();
    };
  }, []);

  const stopSession = () => {
    // Flag to prevent further processing
    cleanupRef.current = true;

    if (sessionRef.current) {
      try {
        // Attempt to close or just drop reference
        sessionRef.current = null; 
      } catch (e) { console.error(e); }
    }

    if (inputSourceRef.current) {
        try { inputSourceRef.current.disconnect(); } catch(e){}
        inputSourceRef.current = null;
    }
    if (processorRef.current) {
      try { 
          processorRef.current.disconnect(); 
          processorRef.current.onaudioprocess = null;
      } catch(e){}
      processorRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (inputAudioContextRef.current) {
        inputAudioContextRef.current.close().catch(() => {});
        inputAudioContextRef.current = null;
    }
    if (outputAudioContextRef.current) {
        outputAudioContextRef.current.close().catch(() => {});
        outputAudioContextRef.current = null;
    }
    
    // Stop all playing audio
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch (e) {}
    });
    sourcesRef.current.clear();

    setIsActive(false);
    setIsConnecting(false);
  };

  const startSession = async () => {
    cleanupRef.current = false;
    
    // Access API Key directly to allow bundler replacement
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
        alert("API Key no encontrada.");
        return;
    }

    try {
      setIsConnecting(true);
      const ai = new GoogleGenAI({ apiKey });

      // Audio Contexts
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) {
          throw new Error("AudioContext not supported");
      }

      inputAudioContextRef.current = new AudioContextClass({ sampleRate: 16000 });
      outputAudioContextRef.current = new AudioContextClass({ sampleRate: 24000 });
      
      outputNodeRef.current = outputAudioContextRef.current.createGain();
      outputNodeRef.current.connect(outputAudioContextRef.current.destination);

      // Microphone
      streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Tool Definitions
      const completeBookingTool: FunctionDeclaration = {
        name: 'completeBooking',
        description: 'Finaliza la reserva una vez que se tiene la cancha, fecha, hora y número de WhatsApp.',
        parameters: {
            type: Type.OBJECT,
            properties: {
                court: { type: Type.STRING, description: "Nombre de la cancha (Valencia, Madrid o Barcelona)" },
                date: { type: Type.STRING, description: "Fecha de la reserva (ej. 'mañana', 'lunes 20')" },
                time: { type: Type.STRING, description: "Hora de la reserva" },
                whatsapp: { type: Type.STRING, description: "Número de WhatsApp del usuario" }
            },
            required: ["court", "date", "time", "whatsapp"]
        }
      };

      const cancelBookingTool: FunctionDeclaration = {
          name: 'cancelBooking',
          description: 'Cancela una reserva existente dado el ID o detalles.',
          parameters: {
              type: Type.OBJECT,
              properties: {
                  details: { type: Type.STRING, description: "Detalles de la reserva a cancelar" }
              }
          }
      };

      const getReservationsTool: FunctionDeclaration = {
          name: 'getReservations',
          description: 'Obtiene la lista de reservas actuales del usuario.',
          parameters: {
              type: Type.OBJECT,
              properties: {}
          }
      };

      // Connect to Gemini Live
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
          systemInstruction: `Eres Sofía, la asistente virtual de X Padel Club en México. Habla en español de México con un tono amable y enérgico.
          
          Tus funciones son:
          1. Agendar canchas. Tenemos 3 canchas disponibles: "Cancha Valencia", "Cancha Madrid" y "Cancha Barcelona".
          2. Ver reservaciones actuales.
          3. Cancelar o editar reservaciones.

          Proceso de reserva:
          1. Pregunta qué cancha, fecha y hora desean.
          2. IMPORTANTE: Una vez acordada la cita, DEBES pedir el número de WhatsApp para confirmar.
          3. Cuando tengas cancha, fecha, hora y WhatsApp, ejecuta la función 'completeBooking'.

          Si piden ver reservas, usa 'getReservations'.
          Si piden cancelar, usa 'cancelBooking'.
          `,
          tools: [{ functionDeclarations: [completeBookingTool, cancelBookingTool, getReservationsTool] }]
        },
        callbacks: {
          onopen: () => {
            if (cleanupRef.current) return;
            setIsConnecting(false);
            setIsActive(true);
            
            if (!inputAudioContextRef.current || !streamRef.current) return;
            
            try {
                inputSourceRef.current = inputAudioContextRef.current.createMediaStreamSource(streamRef.current);
                processorRef.current = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);
                
                processorRef.current.onaudioprocess = (e) => {
                  if (cleanupRef.current) return;
                  const inputData = e.inputBuffer.getChannelData(0);
                  const pcmBlob = createBlob(inputData);
                  sessionPromise.then(session => {
                      if (!cleanupRef.current) {
                        session.sendRealtimeInput({ media: pcmBlob });
                      }
                  }).catch(console.error);
                };
                
                inputSourceRef.current.connect(processorRef.current);
                processorRef.current.connect(inputAudioContextRef.current.destination);
            } catch (err) {
                console.error("Audio setup error", err);
                stopSession();
            }
          },
          onmessage: async (msg: LiveServerMessage) => {
            if (cleanupRef.current) return;

            // Handle Audio Output
            const base64Audio = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio && outputAudioContextRef.current && outputNodeRef.current) {
                const ctx = outputAudioContextRef.current;
                
                try {
                    const audioBytes = decode(base64Audio);
                    const audioBuffer = await decodeAudioData(audioBytes, ctx, 24000, 1);
                    
                    nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
                    const source = ctx.createBufferSource();
                    source.buffer = audioBuffer;
                    source.connect(outputNodeRef.current);
                    
                    source.addEventListener('ended', () => {
                        sourcesRef.current.delete(source);
                    });
                    
                    source.start(nextStartTimeRef.current);
                    nextStartTimeRef.current += audioBuffer.duration;
                    sourcesRef.current.add(source);
                } catch (e) {
                    console.error("Audio decode error", e);
                }
            }

            // Handle Interruption
            if (msg.serverContent?.interrupted) {
                sourcesRef.current.forEach(s => {
                    try { s.stop(); } catch(e){}
                });
                sourcesRef.current.clear();
                nextStartTimeRef.current = 0;
            }

            // Handle Tool Calls
            if (msg.toolCall) {
                for (const fc of msg.toolCall.functionCalls) {
                    let result: any = { status: 'ok' };
                    
                    if (fc.name === 'completeBooking') {
                        const { court, date, time, whatsapp } = fc.args as any;
                        const newId = Math.random().toString(36).substr(2, 9);
                        RESERVATIONS.push({ id: newId, court, date, time, whatsapp });
                        
                        const Swal = getSwal();
                        if (Swal) {
                            Swal.fire({
                                title: '¡Reserva Confirmada!',
                                html: `
                                    <div class="text-left">
                                        <p><strong>Cancha:</strong> ${court}</p>
                                        <p><strong>Fecha:</strong> ${date}</p>
                                        <p><strong>Hora:</strong> ${time}</p>
                                        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
                                    </div>
                                `,
                                icon: 'success',
                                confirmButtonColor: '#13ec6d',
                                confirmButtonText: 'Excelente'
                            });
                        }
                        result = { result: "Reserva creada exitosamente y mostrada al usuario." };
                    }
                    
                    if (fc.name === 'getReservations') {
                        if (RESERVATIONS.length === 0) {
                            result = { result: "No hay reservas activas." };
                        } else {
                            const list = RESERVATIONS.map(r => `${r.court} el ${r.date} a las ${r.time}`).join(', ');
                            result = { result: `Reservas actuales: ${list}` };
                        }
                    }

                    if (fc.name === 'cancelBooking') {
                         // Mock cancellation
                         const removed = RESERVATIONS.pop(); 
                         if (removed) {
                             result = { result: "La última reserva ha sido cancelada." };
                             const Swal = getSwal();
                             if (Swal) {
                                Swal.fire({
                                    title: 'Reserva Cancelada',
                                    text: 'Se ha eliminado tu última reserva.',
                                    icon: 'info',
                                    confirmButtonColor: '#13ec6d'
                                });
                             }
                         } else {
                             result = { result: "No hay reservas para cancelar." };
                         }
                    }

                    sessionPromise.then(session => {
                        if (!cleanupRef.current) {
                            session.sendToolResponse({
                                functionResponses: {
                                    id: fc.id,
                                    name: fc.name,
                                    response: result
                                }
                            });
                        }
                    });
                }
            }
          },
          onclose: () => {
            if (!cleanupRef.current) {
                setIsActive(false);
            }
          },
          onerror: (e) => {
            console.error("Gemini Error", e);
            if (!cleanupRef.current) {
                setIsActive(false);
                setIsConnecting(false);
            }
          }
        }
      });
      
      sessionRef.current = await sessionPromise;

    } catch (error) {
      console.error("Connection failed", error);
      setIsConnecting(false);
      setIsActive(false);
      const Swal = getSwal();
      if (Swal) {
          Swal.fire({
              icon: 'error',
              title: 'Error de conexión',
              text: 'Asegúrate de tener permisos de micrófono y una API Key válida.',
              confirmButtonColor: '#13ec6d'
          });
      } else {
          alert("Error al conectar con el asistente.");
      }
    }
  };

  const toggleVoice = () => {
    if (isActive || isConnecting) {
      stopSession();
    } else {
      startSession();
    }
  };

  return (
    <button 
      onClick={toggleVoice}
      className={`fixed bottom-24 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-full font-bold shadow-xl transition-all duration-300 ${
        isActive 
          ? 'bg-red-500 text-white voice-active' 
          : isConnecting
            ? 'bg-yellow-400 text-black'
            : 'bg-primary text-black hover:scale-105'
      }`}
    >
      <span className="material-symbols-outlined">
        {isActive ? 'mic_off' : isConnecting ? 'hourglass_empty' : 'mic'}
      </span>
      <span>{isActive ? 'Detener' : isConnecting ? 'Conectando...' : 'Hablar'}</span>
    </button>
  );
};

// Utils for PCM Audio
function createBlob(data: Float32Array) {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    // Basic float to int16 conversion
    int16[i] = Math.max(-1, Math.min(1, data[i])) * 0x7FFF;
  }
  const uint8 = new Uint8Array(int16.buffer);
  
  let binary = '';
  const len = uint8.byteLength;
  for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(uint8[i]);
  }
  const b64 = btoa(binary);

  return {
    data: b64,
    mimeType: 'audio/pcm;rate=16000',
  };
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
    
  // Ensure data byte length is multiple of 2 for Int16Array
  let bufferToUse = data.buffer;
  if (data.byteLength % 2 !== 0) {
      const newLen = data.byteLength - (data.byteLength % 2);
      const newBytes = new Uint8Array(newLen);
      newBytes.set(data.subarray(0, newLen));
      bufferToUse = newBytes.buffer;
  }

  const dataInt16 = new Int16Array(bufferToUse);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}
