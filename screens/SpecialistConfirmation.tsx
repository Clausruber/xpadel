import React from 'react';
import { ScreenName } from '../types';

interface SpecialistConfirmationProps {
  onNavigate: (screen: ScreenName) => void;
}

export const SpecialistConfirmationScreen: React.FC<SpecialistConfirmationProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-screen bg-background-light">
      <div className="flex justify-end p-4">
        <button onClick={() => onNavigate(ScreenName.HOME)} className="text-primary font-bold">Hecho</button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-primary text-6xl">check_circle</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">¡Cita Confirmada!</h1>
        <p className="text-center text-gray-600 mb-8 max-w-xs">Hemos agendado tu cita con nuestro especialista en X Padel Club.</p>

        <div className="w-full bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8 space-y-4">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <span className="material-symbols-outlined text-primary">person</span>
             </div>
             <div>
               <p className="text-xs text-gray-400">Especialista</p>
               <p className="font-medium text-gray-900">Dr. Alejandro Ledesma</p>
             </div>
          </div>
          <div className="border-t border-gray-100"></div>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <span className="material-symbols-outlined text-primary">calendar_today</span>
             </div>
             <div>
               <p className="text-xs text-gray-400">Fecha</p>
               <p className="font-medium text-gray-900">Sábado, 12 Octubre, 2024</p>
             </div>
          </div>
          <div className="border-t border-gray-100"></div>
           <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <span className="material-symbols-outlined text-primary">schedule</span>
             </div>
             <div>
               <p className="text-xs text-gray-400">Hora</p>
               <p className="font-medium text-gray-900">11:00 AM - 12:00 PM</p>
             </div>
          </div>
          <div className="border-t border-gray-100"></div>
           <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <span className="material-symbols-outlined text-primary">location_on</span>
             </div>
             <div>
               <p className="text-xs text-gray-400">Lugar</p>
               <p className="font-medium text-gray-900">X Padel Club - Consultorio 3</p>
             </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3 pb-8">
         <button className="w-full h-14 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
          <span className="material-symbols-outlined">add</span>
          Añadir al calendario
        </button>
        <button onClick={() => onNavigate(ScreenName.MY_RESERVATIONS)} className="w-full h-14 text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors">
          Ver todas mis citas
        </button>
      </div>
    </div>
  );
};
