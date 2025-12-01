import React from 'react';
import { ScreenName } from '../types';

interface NewsDetailProps {
  onBack: () => void;
}

export const NewsDetailScreen: React.FC<NewsDetailProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex items-center justify-between p-4 sticky top-0 bg-white/90 backdrop-blur-sm z-10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined text-gray-900">arrow_back_ios_new</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined text-gray-900">ios_share</span>
        </button>
      </div>

      <div className="px-4 pb-24">
        <div className="w-full h-64 rounded-2xl bg-cover bg-center mb-6 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALoYQ-UoVdG_YmHOezhjiGEYm-Xc9jRjFp8CPQ090eIP0gS69a-2SE2y4aldSilQHq1O1E_5EXAJaSB2x1AcXu40lz4fd65k3tPmyVPem-ZQ_09z-iJcLdbnGNv-qNzMF_RXYL9ackBj9WLz27tFINLXXEXfTVTOxRlsCZ4ud6BIeZuqAz6pscBSaRZTLURTSR88xp3i2zhxRyNNPmEPV4gVUvqTCJCNAv5lg0FplBZtB2SPfE5rIy5lcNcXdexW5S0wmYhkyVIFY")' }}></div>
        
        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2 font-display">Nuevo Torneo Anual Anunciado por X Padel Club</h1>
        <p className="text-sm text-gray-500 mb-6">Publicado el 15 de agosto de 2024</p>
        
        <div className="prose prose-zinc">
          <p className="text-gray-800 leading-relaxed mb-4 font-serif text-lg">
            El club se complace en anunciar la edición de este año de nuestro torneo anual, que promete ser el más grande y emocionante hasta la fecha. Contaremos con categorías para todos los niveles, desde principiantes hasta profesionales, asegurando que todos tengan la oportunidad de competir y disfrutar.
          </p>
          <p className="text-gray-800 leading-relaxed font-serif text-lg">
            Las inscripciones ya están abiertas a través de la sección de torneos de nuestra aplicación. ¡No te pierdas la oportunidad de ser parte de este increíble evento deportivo y mostrar tus habilidades en la cancha! Prepara tu pala y únete a la competición.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent pb-6">
        <button className="w-full h-14 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform">
          <span>Compartir Noticia</span>
          <span className="material-symbols-outlined text-xl">ios_share</span>
        </button>
      </div>
    </div>
  );
};
