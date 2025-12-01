import React from 'react';
import { ScreenName } from '../types';

interface TournamentsProps {
  onBack: () => void;
}

export const TournamentsScreen: React.FC<TournamentsProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light pb-24">
       <header className="sticky top-0 z-10 bg-background-light/90 backdrop-blur-sm">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
            <span className="material-symbols-outlined text-gray-900">arrow_back_ios_new</span>
          </button>
          <h1 className="text-lg font-bold text-gray-900">Torneos Abiertos</h1>
          <div className="w-10"></div>
        </div>
        
        <div className="px-4 py-2">
          <div className="flex items-center bg-white rounded-xl px-3 py-3 shadow-sm border border-gray-100">
            <span className="material-symbols-outlined text-gray-400 mr-2">search</span>
            <input type="text" placeholder="Buscar por nombre" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 placeholder:text-gray-400" />
          </div>
        </div>

        <div className="flex gap-2 px-4 pb-4 overflow-x-auto hide-scrollbar">
          <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium flex items-center gap-1 whitespace-nowrap">
            <span className="material-symbols-outlined text-lg">tune</span> Todos
          </button>
          {['Categoría', 'Fecha', 'Nivel'].map((f, i) => (
             <button key={i} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium flex items-center gap-1 whitespace-nowrap">
              {f} <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
             </button>
          ))}
        </div>
      </header>

      <div className="px-4 flex flex-col gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPMgXgWz-KDTjqCDdUicaSf7XwX0zmtAPP9dWpRZqGt4gMUrCVWKyLxcBiO01NgruB9kkILV1lsJoC4Wxuj7q7IrPCdhlXZnrr0ozrasuED3HIRIOmfDlXIewTZZ-jIA4hHCPP4NWUXqZ1IAJjDAJ5yqamPqip3oW0w2nq0fCwtKaOf9orSipmMlFxUVuYJy7-hTpCxO89Unt1L6qFtwsuSV7iBsvwPQEITM_l6w77DTqK_TgxjFYkwSlejUlNbAgeBzJIkGC-E8A")' }}>
            <span className="absolute top-3 left-3 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">Inscripciones Abiertas</span>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Torneo de Verano 2024</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="material-symbols-outlined text-lg text-primary">calendar_month</span>
                <span>20 Jul - 28 Jul</span>
              </div>
               <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="material-symbols-outlined text-lg text-primary">groups</span>
                <span>Masculina A, Femenina B</span>
              </div>
               <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="material-symbols-outlined text-lg text-primary">sell</span>
                <span>50€ por pareja</span>
              </div>
            </div>
            <button className="w-full h-11 bg-primary text-black font-bold rounded-lg hover:bg-green-400 transition-colors">Inscribirme</button>
          </div>
        </div>

        {/* Card 2 */}
         <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjpkclNIOxU1dOSJhYPYtV2w77-Tu_bFRrxFtfbfd04LYD1b5WcLksIxdoli4hE7saARc-xd7MEdyDlaouU5x5eqUZg3Knmt8W0oFOFyNbwEa8LpiEpvtxUqdTeZr_Xf_2N42RRXV5h4zhAiBNtWy5h0yrozK4B60BfT2KSKtbLCblGHABudPr_3T9OO9_2AnF4Xh4kY8GvsgCjxzm3pS-CG-gRoT_FgZ72lXyEFNL-SfDz3JSMaxWFaWIqg6X0M4iQy3frHy4ey0")' }}>
            <span className="absolute top-3 left-3 bg-gray-800 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Próximamente</span>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Torneo Aniversario X Club</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="material-symbols-outlined text-lg text-primary">calendar_month</span>
                <span>15 Sep - 22 Sep</span>
              </div>
               <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="material-symbols-outlined text-lg text-primary">groups</span>
                <span>Todas las categorías</span>
              </div>
               <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="material-symbols-outlined text-lg text-primary">sell</span>
                <span>45€ por pareja</span>
              </div>
            </div>
            <button className="w-full h-11 bg-primary/20 text-gray-900 font-bold rounded-lg hover:bg-primary/30 transition-colors">Ver Detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
};
