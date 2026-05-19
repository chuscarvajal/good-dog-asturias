import { Phone, MapPin } from "lucide-react";

const services = ["Adiestramiento Positivo","Socialización y Conducta","Actividades en Entorno Natural","Obediencia Básica","Modificación de Conducta","Educación Canina"];
const quickLinks = ["Inicio","Servicios","Por Qué Elegirnos","Galería","Contacto","Reseñas Google"];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#2b2b2b] text-white">
      <div className="container py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + descripción */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
              <circle cx="19" cy="19" r="19" fill="white" fillOpacity="0.15"/>
              <text x="19" y="25" textAnchor="middle" fontSize="20" fill="white">🐕</text>
            </svg>
            <div className="text-white leading-tight">
              <span className="block font-black text-sm tracking-widest uppercase">Good Dog</span>
              <span className="block text-[8px] tracking-[0.2em] uppercase font-light opacity-70">Adiestramiento Canino · Asturias</span>
            </div>
          </div>
          <p className="text-white/50 text-xs leading-relaxed">
            Adiestramiento canino en Allende, Asturias. 4.8★ en Google. Educación positiva, socialización y modificación de conducta en plena naturaleza asturiana.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white">Servicios</h4>
          <ul className="space-y-2">
            {services.map(l => (
              <li key={l}><a href="#servicios" className="text-white/50 text-xs hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Accesos Rápidos */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white">Accesos Rápidos</h4>
          <ul className="space-y-2">
            {quickLinks.map(l => (
              <li key={l}><a href="#" className="text-white/50 text-xs hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white">Contacto</h4>
          <ul className="space-y-3 text-white/50 text-xs">
            <li className="flex items-start gap-2">
              <Phone size={12} className="mt-0.5 shrink-0 text-white/30" />
              <a href="tel:+34679565685" className="hover:text-white">+34 679 56 56 85</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={12} className="mt-0.5 shrink-0 text-white/30" />
              <span>el Molin de abajo, nº1, 33128 Allende, Asturias</span>
            </li>
          </ul>

          {/* Info block */}
          <div className="bg-white/10 rounded p-4 text-xs text-white/70 mt-5">
            <p className="font-semibold text-white mb-1">Horario</p>
            <p className="text-[11px] leading-relaxed">Martes a viernes de 10:00 a 18:30 h.<br/>Llámanos o escríbenos por WhatsApp para reservar tu sesión de adiestramiento.</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/30">
          <p>© {new Date().getFullYear()} Good Dog. Todos los derechos reservados.</p>
          <a href="#" className="hover:text-white/60 transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
