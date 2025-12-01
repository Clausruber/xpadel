import React from 'react';
import { ScreenName } from '../types';

interface SpecialistsProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

export const SpecialistsScreen: React.FC<SpecialistsProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light pb-24">
      <header className="flex items-center justify-between p-4 sticky top-0 bg-background-light z-10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined text-gray-900">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold text-gray-900">Agendar Cita</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-4 mb-6">
        <div className="flex p-1 bg-primary/20 rounded-xl">
          <button className="flex-1 py-2 text-sm font-bold text-gray-900 bg-white rounded-lg shadow-sm">Nutrición</button>
          <button className="flex-1 py-2 text-sm font-medium text-gray-600">Fisioterapia</button>
        </div>
      </div>

      <div className="px-4 flex flex-col gap-4">
        {[
          { name: "Dr. Alejandro Ledesma", role: "Nutriólogo Deportivo", desc: "Especialista en rendimiento y recuperación para atletas.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEf2uhuW1bszfxvfiKS1zHUtHt_ZjckuKO_s53CcI4xi2jde7JnLst18emu_52DqLDlrUzSbM7HkD9GYx3UGR8a2vgYf55Crcq1eZY7r9I0XG2cwTHWW-Ns5h7CxKVPRGuGcxZGxBYdGnZ9Jo6X-ZzNs0KgCC2324aeZWkVtrkpsJMnFQ7AnssfBt88WPzUgEID0r1LCwBx3rQkvu-Wmmpz3KXIe4nWwalB1w9nrPRKr3KjY2bY7wlOMLf9M2RmqAvVvYrpqCd_p0" },
          { name: "Dra. Sofía Navarro", role: "Nutrióloga Clínica", desc: "Ayuda a optimizar tu dieta para un estilo de vida saludable.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvl5IS7HTNgLGGkpQkXgZxiKa8XPFkVoRtdMtbjU4UVLohfJ06hvK6YZVwAiYnF5qEqOzaA4k0CKaqxp4IOa9QzzMSZkGBWNPkoTb7MyTqHZVF4bOOSKiWN6kWpXlGVa9qAP2vVGolkNVX-RZmBe7I_5MSbxSZ-L3quiMdrTohmHMFv67pA_o0zJvI500-lUoTehd5VF4BYfopSWzfgopCRZNMe_cEVSF8pnmpArEJ-UaLlj_mbzc_krSNm-gDr_1H2unwGCo2b5E" },
          { name: "Dr. Carlos Valdéz", role: "Experto en nutrición", desc: "Experto en nutrición para competencias y preparación física.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyDYDcJUd3QEDrmqtjT_91XmXrNxs7ws2dkBsaSAWPHUKClSRDRjHpmmHoBoLqcAu06WqJ9BuO3ltiv77TwuPs0AuKCvQSkXn4q7_sTUwtMJF_n_BocmSWV_QWNqBzdZXyCQd3a4GzNXZlqh6UGFM_axuhUpwakYejQ1cJ1B_939jxYdt9qG2Gw8yVxVvfRh9YY8PKNyPViwRp0a7LDAFEaGYAbaB1xCJTHaGemk8a1XDLW2XEOK-vLcGLVj7UdkxNjq4MnMzIrI8" }
        ].map((doc, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4">
             <div className="flex-1">
               <h3 className="font-bold text-gray-900">{doc.name}</h3>
               <p className="text-xs text-gray-500 mb-2">{doc.role}</p>
               <p className="text-sm text-gray-600 mb-4 line-clamp-2">{doc.desc}</p>
               <button onClick={() => onNavigate(ScreenName.SPECIALIST_DETAIL)} className="px-4 py-2 bg-primary text-black text-xs font-bold rounded-lg hover:bg-green-400">Ver Disponibilidad</button>
             </div>
             <div className="w-24 h-24 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url("${doc.img}")` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};
