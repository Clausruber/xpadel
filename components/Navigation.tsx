import React from 'react';
import { ScreenName } from '../types';

interface BottomNavProps {
  currentScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const getIconClass = (screen: ScreenName) => {
    const isActive = currentScreen === screen;
    return `material-symbols-outlined text-2xl mb-1 ${isActive ? 'filled text-primary' : 'text-gray-500'}`;
  };

  const getTextClass = (screen: ScreenName) => {
    const isActive = currentScreen === screen;
    return `text-xs font-medium ${isActive ? 'text-gray-900' : 'text-gray-500'}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe pt-2 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-between items-center pb-2">
        <button onClick={() => onNavigate(ScreenName.HOME)} className="flex flex-col items-center justify-center w-16">
          <span className={getIconClass(ScreenName.HOME)}>home</span>
          <span className={getTextClass(ScreenName.HOME)}>Inicio</span>
        </button>
        <button onClick={() => onNavigate(ScreenName.BOOK_COURT)} className="flex flex-col items-center justify-center w-16">
          <span className={getIconClass(ScreenName.BOOK_COURT)}>calendar_month</span>
          <span className={getTextClass(ScreenName.BOOK_COURT)}>Reservar</span>
        </button>
        <button onClick={() => onNavigate(ScreenName.MY_RESERVATIONS)} className="flex flex-col items-center justify-center w-16">
          <span className={getIconClass(ScreenName.MY_RESERVATIONS)}>event_note</span>
          <span className={getTextClass(ScreenName.MY_RESERVATIONS)}>Mis Reservas</span>
        </button>
        <button onClick={() => onNavigate(ScreenName.PROFILE)} className="flex flex-col items-center justify-center w-16">
          <span className={getIconClass(ScreenName.PROFILE)}>person</span>
          <span className={getTextClass(ScreenName.PROFILE)}>Perfil</span>
        </button>
      </div>
    </div>
  );
};
