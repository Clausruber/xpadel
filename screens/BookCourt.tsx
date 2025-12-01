import React from 'react';
import { ScreenName } from '../types';

interface BookCourtProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

export const BookCourtScreen: React.FC<BookCourtProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light pb-24">
      <header className="flex items-center justify-between p-4 sticky top-0 bg-background-light z-10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined text-gray-900">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold text-gray-900">Reservar Cancha</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined text-gray-900">calendar_today</span>
        </button>
      </header>

      {/* Calendar */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
           <button><span className="material-symbols-outlined text-gray-500">chevron_left</span></button>
           <h3 className="font-bold text-gray-900">Octubre 2024</h3>
           <button><span className="material-symbols-outlined text-gray-500">chevron_right</span></button>
        </div>
        <div className="flex justify-between text-center mb-1">
          {['D','L','M','M','J','V','S'].map((d, i) => <span key={i} className="text-xs font-bold text-gray-400 w-8">{d}</span>)}
        </div>
        <div className="flex justify-between items-center text-center">
          <span className="w-8 text-sm text-gray-400">29</span>
          <span className="w-8 text-sm text-gray-400">30</span>
          <span className="w-8 text-sm text-gray-900">1</span>
          <span className="w-8 text-sm text-gray-900">2</span>
          <span className="w-8 text-sm text-gray-900">3</span>
          <span className="w-8 text-sm text-gray-900">4</span>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-black shadow-sm">5</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 px-4 mb-6 overflow-x-auto hide-scrollbar">
        <button className="px-5 py-2 bg-primary text-black text-sm font-bold rounded-full whitespace-nowrap">Todas</button>
        <button className="px-5 py-2 bg-white text-gray-700 text-sm font-medium rounded-full whitespace-nowrap">Individual</button>
        <button className="px-5 py-2 bg-white text-gray-700 text-sm font-medium rounded-full whitespace-nowrap">Doble</button>
      </div>

      {/* Courts */}
      <div className="flex flex-col gap-6 px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB69HITk4kfpvX8sAJBdSFD4FuErPyeHdOYMzc80eXHVICLnOBLaCcuXavYQCMCWUgeog3pB7gnfM8jdBKVGz8rjlrdjzGhJaamWuYJmkYICGVASRE-UNqblQ-TvFqyL_12HPokEPFwrTk-GvVjGaIXunaUBXuLsPfIskKI8idNrMUN0A-z6V1PznuCwrysev5A_IU-PEE6ACOo3yYcEq4tiP98nWzTBrUhHG32utXX-TMP_BYnHWtpfWHWlfJ61gnButB97W2eP54")' }}>
             <div className="absolute bottom-2 left-3 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">$45/hr</div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900">Cancha 1 - Central</h3>
            <p className="text-sm text-green-600 mb-4">Techada, Cristal, World Padel Tour</p>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200">17:00</button>
              <button className="px-4 py-2 rounded-lg bg-primary text-black text-sm font-bold shadow-sm">18:00</button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200">19:30</button>
              <button className="px-4 py-2 rounded-lg bg-gray-50 text-gray-300 text-sm font-medium cursor-not-allowed">20:00</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLYapdkSdphg5wqF2rMrq31MB0AmR0SGm9vRiCYPobTMK1TRv0GzoRKv2fL3qGKTxfIEWsZsDEu1AMTeILQ7e9WtNvxeUtB7azgTTo60ZPwZqXW4hfqDWwMyQD9rVicRsHCEtlSKHWsCbdWWZ_cZJ6vH9cLJO1yU7WAMcV_g_X2XlIbau4X-Mffvttv_gC8OKAJWejTyRp8q0-IMZ_gyk30Su0B3D_9QS2HGSjkG5vQH-6sitHxu97ngSp8H39QGPzazF8ZAhUv5w")' }}>
             <div className="absolute bottom-2 left-3 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">$30/hr</div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900">Cancha 2 - Panorámica</h3>
            <p className="text-sm text-green-600 mb-4">Aire libre, Cristal</p>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200">17:00</button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200">18:00</button>
              <button className="px-4 py-2 rounded-lg bg-gray-50 text-gray-300 text-sm font-medium cursor-not-allowed">18:30</button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200">19:00</button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent pb-8">
        <button onClick={() => onNavigate(ScreenName.PAYMENT)} className="w-full h-14 bg-primary text-black font-bold text-lg rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform">
          Reservar por $45
        </button>
      </div>
    </div>
  );
};
