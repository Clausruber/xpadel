import React from 'react';
import { ScreenName } from '../types';

interface SpecialistDetailProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

export const SpecialistDetailScreen: React.FC<SpecialistDetailProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light">
      <header className="flex items-center justify-between p-4 sticky top-0 bg-background-light z-10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined text-gray-900">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold text-gray-900">Agendar Cita</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-4 pb-4 border-b border-gray-200">
         <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEf2uhuW1bszfxvfiKS1zHUtHt_ZjckuKO_s53CcI4xi2jde7JnLst18emu_52DqLDlrUzSbM7HkD9GYx3UGR8a2vgYf55Crcq1eZY7r9I0XG2cwTHWW-Ns5h7CxKVPRGuGcxZGxBYdGnZ9Jo6X-ZzNs0KgCC2324aeZWkVtrkpsJMnFQ7AnssfBt88WPzUgEID0r1LCwBx3rQkvu-Wmmpz3KXIe4nWwalB1w9nrPRKr3KjY2bY7wlOMLf9M2RmqAvVvYrpqCd_p0")' }}></div>
          <div>
            <h2 className="font-bold text-gray-900">Dr. Alejandro Ledesma</h2>
            <p className="text-sm text-gray-500">Nutriólogo Deportivo</p>
          </div>
         </div>
      </div>

      <div className="p-4 flex-1">
        <h3 className="font-bold text-gray-900 mb-3">Selecciona una fecha</h3>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button><span className="material-symbols-outlined text-gray-500">chevron_left</span></button>
            <span className="font-bold text-gray-900">Octubre 2024</span>
            <button><span className="material-symbols-outlined text-gray-500">chevron_right</span></button>
          </div>
          <div className="grid grid-cols-7 gap-y-4 text-center text-sm">
             {['LU','MA','MI','JU','VI','SA','DO'].map(d => <span key={d} className="text-gray-400 text-xs font-bold">{d}</span>)}
             {/* Simple visual mock of calendar dates */}
             <span className="text-gray-300">25</span><span className="text-gray-300">26</span><span className="text-gray-300">27</span><span className="text-gray-300">28</span><span className="text-gray-300">29</span><span className="text-gray-300">30</span>
             <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span>
             <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-black mx-auto">12</span>
             <span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-3">Horarios disponibles</h3>
        <div className="grid grid-cols-3 gap-3">
          <button className="py-2 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50">09:00 AM</button>
          <button className="py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-300 cursor-not-allowed bg-gray-50">10:00 AM</button>
          <button className="py-2 rounded-lg bg-primary text-black text-sm font-bold shadow-sm">11:00 AM</button>
          <button className="py-2 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50">12:00 PM</button>
          <button className="py-2 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50">02:00 PM</button>
          <button className="py-2 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50">03:00 PM</button>
          <button className="py-2 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50">04:00 PM</button>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100">
        <button onClick={() => onNavigate(ScreenName.SPECIALIST_CONFIRMATION)} className="w-full h-12 bg-primary text-black font-bold rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform">
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
};
