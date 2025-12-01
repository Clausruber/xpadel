import React from 'react';
import { ScreenName } from '../types';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface ProfileProps {
  onBack: () => void;
}

const winData = [
  { name: 'Ene', val: 90 },
  { name: 'Feb', val: 30 },
  { name: 'Mar', val: 90 },
  { name: 'Abr', val: 40 },
  { name: 'May', val: 10 },
  { name: 'Jun', val: 20 },
];

const levelData = [
  { name: 'Q1', val: 40 },
  { name: 'Q1.5', val: 60 },
  { name: 'Q2', val: 45 },
  { name: 'Q2.5', val: 55 },
  { name: 'Q3', val: 35 },
  { name: 'Q3.5', val: 85 },
  { name: 'Q4', val: 50 },
];

export const ProfileScreen: React.FC<ProfileProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light pb-24">
      <header className="flex items-center justify-between p-4 bg-background-light sticky top-0 z-10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined text-gray-900">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold text-gray-900">Perfil del Jugador</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined text-gray-900">settings</span>
        </button>
      </header>

      <div className="flex flex-col items-center p-6 gap-4">
        <div className="w-32 h-32 rounded-full border-2 border-primary/30 p-1">
          <div className="w-full h-full rounded-full bg-cover bg-center shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBl1yy5ZQCQ0UiiyFo3nasB0kf4Xs0DbfNS3Qe8qjFy-iBtpbnWtbtQMcTcMSxqA12JIl93qhvJqwKTDOeOor-hJ96oeM2xJKqIk4-vmM9Fkh02KFAVjdJSTnfTsdgAvLJ1vdaxrUZ0IPBvf7Cc7YqK7p-nrNuY1qLN_Rfgz7UySpH4mvBlWvc3c6KCkXv6sUK11dDxv1dE39tLeHNqrm_oPz_GqzKKflaFfcIvVgWG7Po6mINvJTCLltlmuS7Hpj08xP4hmgMJOLY")' }}></div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Alejandro Martinez</h2>
          <p className="text-gray-500">Nivel: Intermedio</p>
        </div>
        <button className="bg-primary/20 text-gray-900 font-bold py-2 px-6 rounded-lg text-sm w-full max-w-[200px]">
          Editar Perfil
        </button>
      </div>

      <div className="flex justify-between gap-3 px-4 mb-6">
        {[
          { label: 'Partidos Ganados', val: '128' },
          { label: 'Porcentaje Victorias', val: '62%' },
          { label: 'Partidos Jugados', val: '205' },
        ].map((stat, i) => (
          <div key={i} className="flex-1 bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <span className="text-2xl font-bold text-gray-900">{stat.val}</span>
            <span className="text-xs text-gray-500 leading-tight">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="flex border-b border-gray-200 px-4 mb-4">
        <button className="flex-1 pb-3 text-sm font-bold text-gray-900 border-b-2 border-primary">Estadísticas</button>
        <button className="flex-1 pb-3 text-sm font-bold text-gray-400 border-b-2 border-transparent">Historial</button>
        <button className="flex-1 pb-3 text-sm font-bold text-gray-400 border-b-2 border-transparent">Información</button>
      </div>

      <div className="flex flex-col gap-4 px-4">
        {/* Wins Chart */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="mb-4">
            <h3 className="font-medium text-gray-900">Victorias y Derrotas</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">128 / 77</span>
              <span className="text-xs text-gray-500">Últimos 6 meses <span className="text-green-500 font-bold">+5%</span></span>
            </div>
          </div>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={winData}>
                <XAxis dataKey="name" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px' }} />
                <Bar dataKey="val" fill="#13ec6d" radius={[4, 4, 0, 0]} opacity={0.3} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Level Evolution Chart */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="mb-4">
            <h3 className="font-medium text-gray-900">Evolución de Nivel</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">Intermedio</span>
              <span className="text-xs text-gray-500">Último año <span className="text-green-500 font-bold">+2%</span></span>
            </div>
          </div>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={levelData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#13ec6d" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#13ec6d" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: '8px' }} />
                <Area type="monotone" dataKey="val" stroke="#13ec6d" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
