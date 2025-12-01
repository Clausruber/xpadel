import React from 'react';
import { ScreenName } from '../types';

interface MyReservationsProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

export const MyReservationsScreen: React.FC<MyReservationsProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light pb-24">
      <header className="sticky top-0 z-10 bg-background-light/90 backdrop-blur-sm">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
            <span className="material-symbols-outlined text-gray-900">arrow_back_ios_new</span>
          </button>
          <h1 className="text-lg font-bold text-gray-900">Mis Reservas</h1>
          <div className="w-10"></div>
        </div>
        <div className="flex gap-3 px-4 py-3">
          <button className="px-4 py-1.5 bg-primary text-black text-sm font-medium rounded-lg">Próximas</button>
          <button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-lg">Anteriores</button>
          <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-lg flex items-center gap-1">
             Todas <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
          </button>
        </div>
      </header>

      <div className="px-4 flex flex-col gap-4">
        {/* Reservation 1 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden p-4">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-gray-600">sports_tennis</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Reserva de Cancha</h3>
                <p className="text-sm text-green-600">Cancha Panorámica 1</p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Confirmada</span>
          </div>
          <div className="border-t border-gray-100 mb-3"></div>
          <div className="flex justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">calendar_month</span> Miércoles, 17 Jul</div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">schedule</span> 18:00 - 19:30</div>
          </div>
        </div>

        {/* Reservation 2 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden p-4">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-gray-600">clinical_notes</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Cita con Fisioterapeuta</h3>
                <p className="text-sm text-green-600">Dra. Elena García</p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">Pendiente</span>
          </div>
          <div className="border-t border-gray-100 mb-3"></div>
          <div className="flex justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">calendar_month</span> Viernes, 19 Jul</div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">schedule</span> 11:00</div>
          </div>
        </div>

        {/* Reservation 3 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden p-4 opacity-70">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-gray-600">sports_tennis</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 line-through">Reserva de Cancha</h3>
                <p className="text-sm text-gray-500 line-through">Cancha 3</p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">Cancelada</span>
          </div>
          <div className="border-t border-gray-100 mb-3"></div>
          <div className="flex justify-between text-sm text-gray-500 line-through">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">calendar_month</span> Lunes, 15 Jul</div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">schedule</span> 20:00 - 21:30</div>
          </div>
        </div>
      </div>
    </div>
  );
};
