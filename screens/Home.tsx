import React from 'react';
import { ScreenName } from '../types';

interface HomeProps {
  onNavigate: (screen: ScreenName) => void;
}

export const HomeScreen: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col pb-24">
      {/* Header */}
      <div className="flex justify-between items-center p-4 pt-6 bg-background-light sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center border-2 border-white shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLEREYiStw_508DG7wKMulvNvtlTSvZ8HbP_HK8GiY95FGNPsgBw_bEBIq4sMdpNLpp46SYh1LK3nOmMtVOInkiU7_MdYOpjHywotAu8DyTwKR1d1woodFDPX81aS3PNGtLERdbhoU-MEfm139Pzas-0XXX7oRFYANYsoZC_u1f0B90mFKOyXpfWoJXB89y1OM1Sb6o-OqWelIbHdDDv7iuKnFggOnEUxdJPEPgn7OENffPDDSzwjriNaUmE2fuKaLZWDCHfEX9U0")' }}></div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">X Padel Club</p>
            <h1 className="text-xl font-bold text-gray-900">Hola, Carlos</h1>
          </div>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm">
          <span className="material-symbols-outlined text-gray-700">notifications</span>
        </button>
      </div>

      {/* Carousel */}
      <div className="flex overflow-x-auto gap-4 px-4 pb-4 hide-scrollbar snap-x">
        <div className="min-w-[85%] snap-center rounded-2xl overflow-hidden bg-white shadow-md flex flex-col">
          <div className="h-32 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJMr1ZoS1DwwYJU4vaSd2gBF6qcoplCXU5He356W2kU_OIyTqoanAYw6n7I_t-iI0gw6SvXqiqIamSbYw5LlX1F_82dBoVj4zHQ7ZDfmyX6IMkgBZMSNqI5hV8YDkUu6GuWZxxXJknFOstz_HRr6xNk2YR1hCheJ6rcU8FEgX3yEuv4LtvmaWRWTsmws1DArz10PLxxv7ddV0XlTtamDG3tFfkYoRQVmrNXbyWYDOlHjOszGIHWWFY1WzwAzPh_dBI9cIe_yZGHTg")' }}></div>
          <div className="p-4 flex flex-col gap-2">
            <h3 className="font-bold text-lg text-gray-900">Próximo Torneo de Verano</h3>
            <p className="text-sm text-gray-500 line-clamp-2">Inscríbete ahora y compite por el gran premio de $5000 USD.</p>
            <button onClick={() => onNavigate(ScreenName.TOURNNAMENTS)} className="mt-2 self-start px-4 py-2 bg-primary/20 text-green-800 text-sm font-bold rounded-lg hover:bg-primary/30 transition-colors">
              Ver Más
            </button>
          </div>
        </div>
         <div className="min-w-[85%] snap-center rounded-2xl overflow-hidden bg-white shadow-md flex flex-col">
          <div className="h-32 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVoA_oc0XeDK1tfuA8kEMQqO-jIME_HKe5mkyjiWCDfGPWu6jowJtGFwlsvwoJ88KgQg1gDm6lY3owp8XzqBa0GMDY34A8cA_hfn7nJsvuL_EkbVCFQLDM8n6V1Qp67uBLtqTs8muVOJUItpVtEd9ctH1S-HMtagHE-OM-NZVJ3ZwyqBqvV4JmgDmz6jfEIvstMVxl2CkKz26uxvIq3SnrG-J5Bx20rvBP82HsNjzMP9wrSimWEuAJFLBFpGght0meAAy1OqFdoG8")' }}></div>
          <div className="p-4 flex flex-col gap-2">
            <h3 className="font-bold text-lg text-gray-900">Nuevas Instalaciones</h3>
            <p className="text-sm text-gray-500 line-clamp-2">Descubre nuestras canchas renovadas y el nuevo bar con vista panorámica.</p>
            <button onClick={() => onNavigate(ScreenName.NEWS)} className="mt-2 self-start px-4 py-2 bg-primary/20 text-green-800 text-sm font-bold rounded-lg hover:bg-primary/30 transition-colors">
              Explorar
            </button>
          </div>
        </div>
      </div>

      {/* Grid Menu */}
      <div className="grid grid-cols-2 gap-3 px-4 py-4">
        {[
          { icon: 'sports_tennis', title: 'Reservar', subtitle: 'Encuentra horario', screen: ScreenName.BOOK_COURT },
          { icon: 'emoji_events', title: 'Torneos', subtitle: 'Competencias', screen: ScreenName.TOURNNAMENTS },
          { icon: 'newspaper', title: 'Noticias', subtitle: 'Novedades', screen: ScreenName.NEWS },
          { icon: 'medical_services', title: 'Agendar Cita', subtitle: 'Salud y bienestar', screen: ScreenName.SPECIALISTS },
        ].map((item, idx) => (
          <button key={idx} onClick={() => onNavigate(item.screen)} className="flex flex-col items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary/50 transition-colors text-left">
            <span className="material-symbols-outlined text-gray-800 text-3xl mb-3">{item.icon}</span>
            <h3 className="font-bold text-gray-900">{item.title}</h3>
            <p className="text-xs text-gray-500">{item.subtitle}</p>
          </button>
        ))}
      </div>

      {/* Next Reservation Card */}
      <div className="px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row">
          <div className="h-32 sm:h-auto sm:w-32 bg-cover bg-center shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCO4YgJ86lT8fhw1RsfCxMbnP6472tuRVA87yZpQ0yUpBRpDOMRCZSatDh5x6dlv-yzlFhp6m8d4wsNRmFrjhWExef5NqlYNXB_vttDEPYqCdsA2Ka9qjOQ45_FPQPPq0uTmKr8kmDPKo9EOiky6jTElSi7GfCdPCJoBOQt160f0pSQkSq-Hzo5bQDEeViP0nYT9Yp-p_8pOHBfVHJXd6vrnU6rD6yi6q0wUonTBDQbzJbyOsfH4I88hCAgrdWR00EjBnGbRAqI5cs")' }}></div>
          <div className="p-4 flex flex-col justify-center flex-1">
            <div className="flex justify-between items-start mb-1">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Tu Próxima Reserva</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Cancha Central</h3>
            <p className="text-gray-600 text-sm mb-3">Hoy, 18:00 - 19:30 • con Juan Pérez</p>
            <button onClick={() => onNavigate(ScreenName.MY_RESERVATIONS)} className="self-start px-4 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg hover:bg-gray-200">
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
