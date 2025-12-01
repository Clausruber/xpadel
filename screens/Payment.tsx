import React from 'react';
import { ScreenName } from '../types';

interface PaymentProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

export const PaymentScreen: React.FC<PaymentProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light pb-24">
      <header className="flex items-center justify-between p-4 sticky top-0 bg-background-light/90 backdrop-blur-sm z-10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined text-gray-900">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold text-gray-900">Pago de Reserva</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-4 pt-4">
        {/* Summary Card */}
        <div className="bg-white p-5 rounded-xl shadow-sm mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-gray-900">Resumen de la reserva</h2>
            <button className="text-sm font-medium text-primary">Editar</button>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="font-semibold text-gray-900">Cancha 1 - Central</p>
            <p className="text-sm text-gray-500">Sábado, 5 de Octubre, 18:00 - 19:00 (60 min)</p>
          </div>
          <div className="flex justify-between items-center py-2 border-t border-gray-100">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-medium">$45.00</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-500">Servicios</span>
            <span className="font-medium">$0.00</span>
          </div>
          <div className="flex justify-between items-center py-2 text-lg font-bold text-gray-900">
            <span>Total a pagar</span>
            <span>$45.00</span>
          </div>
        </div>

        {/* Payment Methods */}
        <h2 className="font-bold text-gray-900 mb-3">Método de pago</h2>
        <div className="flex flex-col gap-3">
          <label className="flex items-center justify-between p-4 bg-white border-2 border-primary rounded-xl cursor-pointer shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-gray-900">credit_card</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">Tarjeta de crédito/débito</span>
                <span className="text-xs text-gray-500">Mastercard **** 1234</span>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
            </div>
          </label>

          <label className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl cursor-pointer shadow-sm">
             <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="font-bold italic text-blue-800 text-xs">Pay</span><span className="font-bold italic text-blue-500 text-xs">Pal</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">PayPal</span>
                <span className="text-xs text-gray-500">No conectado</span>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
          </label>

           <label className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl cursor-pointer shadow-sm">
             <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-gray-900">phone_iphone</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">Apple Pay</span>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
          </label>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent pb-8">
        <button onClick={() => onNavigate(ScreenName.CONFIRMATION)} className="w-full h-14 bg-primary text-black font-bold text-lg rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform">
          Pagar ahora $45.00
        </button>
      </div>
    </div>
  );
};
