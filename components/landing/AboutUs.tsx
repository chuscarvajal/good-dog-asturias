import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-white border-t border-[#e0e0e0]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src="/images/silvia-con-perro.jpg"
              alt="Silvia, Educadora Canina — con su perro en San Agustín del Guadalix"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#2b2b2b] font-bold uppercase tracking-[0.12em] text-2xl lg:text-3xl">
              Quiénes Somos
            </h2>
            <p className="text-[#666] text-sm leading-relaxed">
              Soy Silvia, educadora canina en San Agustín del Guadalix, al norte de Madrid. Me dedico a la educación y el bienestar canino desde un enfoque positivo, respetuoso y adaptado a cada perro y a cada familia.
            </p>
            <p className="text-[#666] text-sm leading-relaxed">
              Con 5.0 estrellas en Google y 38 reseñas de clientes reales, mi trabajo habla por sí solo. Atiendo tanto de forma presencial como online, para que la distancia no sea un obstáculo para mejorar la relación con tu perro.
            </p>
            <div className="flex flex-wrap gap-2">
              {["5.0★ · 38 Reseñas", "Educación en Positivo", "Presencial y Online", "San Agustín del Guadalix"].map((badge) => (
                <span
                  key={badge}
                  className="border border-[#e0e0e0] text-[#2b2b2b] text-xs font-semibold uppercase tracking-[0.1em] px-4 py-2"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
