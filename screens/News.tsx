import React from 'react';
import { ScreenName } from '../types';

interface NewsProps {
  onNavigate: (screen: ScreenName) => void;
}

export const NewsScreen: React.FC<NewsProps> = ({ onNavigate }) => {
  const categories = ['Todos', 'Noticias del Club', 'Torneos', 'Padel General'];
  
  return (
    <div className="flex flex-col pb-24 min-h-screen bg-background-light">
      <div className="sticky top-0 bg-background-light z-10 pt-4 pb-2">
        <div className="flex items-center justify-between px-4 mb-4">
          <span className="material-symbols-outlined text-3xl text-gray-900">sports_tennis</span>
          <h1 className="text-xl font-bold text-center flex-1">Noticias</h1>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>

        <div className="flex gap-2 px-4 overflow-x-auto hide-scrollbar">
          {categories.map((cat, i) => (
            <button key={i} className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-primary/20 text-gray-900' : 'bg-white border border-gray-200 text-gray-600'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 mt-2">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Destacado</h2>
        <div onClick={() => onNavigate(ScreenName.NEWS_DETAIL)} className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 cursor-pointer group">
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQLUYQgHsul4HHXXTO7DAFkxiPqT-VW_ka2c-lQ_EJ1xRguOktRV71K2XxMKvPK6XX5twynJpuQGei-IeyxYbipQZfSJ2OLj3Mjgt0oBbS4vVSlFtChzSszgWjzVXIIPkNV8FVpQhrykBZd0FdaexT-ygLpLWG92U7AivV-URCyNV2Z8-A843SRzA5AM0onnLRPbsy0pPa4NVr4ohjfLZe84Au7fQCnW-wL72bWPgcqDgzIH8xC0L8Vhi5p4K5l175pPasrum9LFk")' }}></div>
          <div className="p-4">
            <span className="text-primary text-sm font-bold mb-1 block">X Padel Club</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Inscripciones abiertas para el Torneo Aniversario</h3>
            <p className="text-gray-600 text-sm mb-3">No te pierdas el mayor evento del año. Inscribe a tu equipo ahora y compite por el gran premio.</p>
            <p className="text-xs text-gray-400">Hace 2 horas • Torneos</p>
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-3">Últimas Noticias</h2>
        <div className="flex flex-col gap-4">
          {[
             { title: "Nuevas palas 2024: ¿Cuál elegir?", desc: "Análisis de los mejores modelos del mercado.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh3tsdzRc0OLzJ4Hn1YM7wjQInskvjb7HrsAk-4KqrW_YDSog5EloKYkxevs2g2S1y_wdymbkN_GYKQokLIB65MvU1vGTIxQn3Vaev27r5hV9A3C0vEWwB13uMQvcx66KWM3PLz1nMfub3FfJz_4R3F3oxElVPi1Plm-QqFZIjQC1DoGWY_ZZ8_qykpW5HF3Qxw9G3TSdgDzTTIEH27GhlHGBZd9pL1hN7BYCWUavL_EwoxA65XtzG8nQ10Q8t7ww1DzV8SHwyV6E", cat: "Padel General" },
             { title: "Mejoras en las instalaciones", desc: "Hemos renovado la iluminación de las pistas 3 y 4.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5BcNOkSq9hvs0FPbklXJMmpw9QrHPOBqq4PnLoH7PxmVawtjdoOC7LjP505zZE_x1BdPAKvBB7XVfxiXKoh1NmS4FaKEbAOsV431CzCza01qNZM2AWB2h4G0D5K7waVsSHekdUQ0nCTHZFEVb48yvbMrmVIHVVRQ2iC0oVUS9Oc3U1_FtozenTK5ido0D_lcDNsNbXYKqxMlJO8sNtTejeKhxOiUJQxH32cZFhHRrfk30BIUqp4GH47j35GZzOTqHQGj2tkb0_tw", cat: "Noticias del Club" },
             { title: "Resultados del Torneo de Verano", desc: "Consulta los ganadores de todas las categorías.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvrbnQtpz9Gbe1E98i98dsqVQyG2Cfcg_SRM-HKi70cjEB8MyIJbmH3L_mgvb_yxvV4WqgUxSX3CIWRb4v8TrvuT1zWvtUvWJ3B8VTfEoX36KYNITopZU-w8lOZ2hVe7wVX8Z7QFm2bZs-ExaioRyYqGKSUArBW2lpDOrgevKlWNAtVvw4gqe6-hCnnkkVuUXoEB16MwE3Qb_-dH06xixT0QPi1T28IFjCtx4eaFMpGlc8EoU2kMWE4ui-30cj8sHzJ4QR3fpFxvA", cat: "Torneos" }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-white p-3 rounded-xl shadow-sm">
              <div className="w-24 h-24 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url("${item.img}")` }}></div>
              <div className="flex flex-col justify-center">
                <span className="text-primary text-xs font-bold mb-1">{item.cat}</span>
                <h4 className="font-bold text-gray-900 leading-tight mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 line-clamp-2">{item.desc}</p>
                <span className="text-[10px] text-gray-400 mt-2">Hace 2 días</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
