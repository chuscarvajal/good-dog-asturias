import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-16 lg:py-24 bg-white border-t border-[#e0e0e0]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEBXprg29VKlPP-EQZQj_TfGhbXcHpp7dO_koAl2sLXGiGgoPmLkeNip8g9uaPqCwWnw-voOSXPlLTNe2wgqNliWOabL9Ll1081h3io30AOg1m7Y-hizFHhUh3BWFVQeVjMJTzOLg=w800-h600-k-no"
              alt="Good Dog — Adiestramiento Canino"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#2b2b2b] font-bold uppercase tracking-[0.12em] text-2xl lg:text-3xl">
              Quiénes Somos
            </h2>
            <p className="text-[#666] text-sm leading-relaxed">
              Somos Good Dog, una escuela de adiestramiento canino ubicada en Allende, Asturias. Llevamos años trabajando con perros de todos los tamaños, edades y caracteres, ayudando a sus dueños a entenderlos y a construir una relación basada en el respeto y la comunicación.
            </p>
            <p className="text-[#666] text-sm leading-relaxed">
              Trabajamos en plena naturaleza asturiana, lejos del ruido de la ciudad, en un entorno tranquilo que favorece el aprendizaje de tu perro. Nuestro método se basa exclusivamente en el refuerzo positivo: sin castigos, sin intimidación, con paciencia y cariño.
            </p>
            <div className="flex flex-wrap gap-2">
              {["4.8★ Google", "Refuerzo Positivo", "Asturias"].map((badge) => (
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
