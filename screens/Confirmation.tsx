import React from 'react';
import { ScreenName } from '../types';

interface ConfirmationProps {
  onNavigate: (screen: ScreenName) => void;
}

export const ConfirmationScreen: React.FC<ConfirmationProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-screen bg-background-light">
      <div className="flex justify-end p-4">
        <button onClick={() => onNavigate(ScreenName.HOME)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
           <span className="material-symbols-outlined text-gray-900">close</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-8 shadow-lg shadow-primary/30">
          <span className="material-symbols-outlined text-white text-6xl">check</span>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">¡Reserva Confirmada!</h1>
        <p className="text-center text-green-600 mb-10">Tu cancha ha sido reservada con éxito.</p>

        <div className="w-full bg-white rounded-2xl p-6 shadow-sm mb-6 border border-gray-100">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Cancha 1 - Central</h3>
          <div className="grid grid-cols-2 gap-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-400">calendar_today</span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Fecha</span>
                <span className="font-medium text-gray-900">Sábado, 5 Oct</span>
              </div>
            </div>
             <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-400">schedule</span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Hora</span>
                <span className="font-medium text-gray-900">18:00</span>
              </div>
            </div>
             <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-400">hourglass_empty</span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Duración</span>
                <span className="font-medium text-gray-900">60 min</span>
              </div>
            </div>
             <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-400">payments</span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Precio</span>
                <span className="font-medium text-gray-900">$45.00</span>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full h-14 bg-gray-100 text-gray-900 font-bold text-lg rounded-xl flex items-center justify-center gap-2 mb-4 hover:bg-gray-200 transition-colors">
          <span className="material-symbols-outlined">add_circle</span>
          Añadir al calendario
        </button>
      </div>

      <div className="p-4 bg-background-light pb-8">
        <button onClick={() => onNavigate(ScreenName.MY_RESERVATIONS)} className="w-full h-14 bg-primary text-black font-bold text-lg rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform">
          Ver mis reservas
        </button>
      </div>
    </div>
  );
};
