import { Award, Settings, Zap, Clock, Star, Heart } from "lucide-react";

const features = [
  { icon: Award,    title: "4.8★ en Google",              desc: "Valoración excelente en Google. Nuestros clientes destacan el trato cercano, la profesionalidad y los resultados reales que obtienen con sus perros desde las primeras sesiones." },
  { icon: Heart,    title: "Solo Refuerzo Positivo",      desc: "Trabajamos exclusivamente con técnicas amables y sin castigos. Fomentamos el vínculo entre el perro y su dueño a través de la comunicación, la confianza y el juego." },
  { icon: Settings, title: "Para Todos los Niveles",      desc: "Ya tengas un cachorro que empieza o un adulto con problemas de conducta, nuestros programas se adaptan a cada caso. No hace falta experiencia previa para empezar." },
  { icon: Zap,      title: "Entorno Natural Asturiano",   desc: "Las sesiones se desarrollan en los parajes naturales de Asturias, lejos del estrés urbano. Un ambiente rural único que favorece el aprendizaje y el bienestar del perro." },
  { icon: Clock,    title: "Horario Flexible",            desc: "Atendemos de martes a viernes de 10:00 a 18:30 para adaptarnos a tu agenda. Consulta disponibilidad y reserva tu sesión sin compromiso." },
  { icon: Star,     title: "Resultados Garantizados",     desc: "Técnicas efectivas con seguimiento personalizado después de cada sesión. Te enseñamos a mantener los aprendizajes en casa para que los resultados sean permanentes." },
];

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-[#f9f9f9] border-t border-[#e0e0e0]">
      <div className="container">
        <h2 className="section-title">Por Qué Elegirnos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="shrink-0 w-12 h-12 border border-[#e0e0e0] bg-white flex items-center justify-center mt-0.5">
                <Icon size={20} className="text-[#2b2b2b]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[#2b2b2b] font-bold text-sm uppercase tracking-[0.12em] mb-2">{title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
