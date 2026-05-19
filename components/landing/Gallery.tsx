import Image from "next/image";

// Fotos subidas por el propietario — extraídas de la pestaña "Del propietario" del perfil GBP
const photos = [
  "https://lh3.googleusercontent.com/p/AF1QipO0QYaD1MOhUCJZhjg3W2rCxSqrn4g5nyjmIv8j=w800-h600-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipPJuOKlSn9nAxJ4S0KnhjBkNuV372GwKaWSqc6k=w800-h600-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipM4ke5xtjeVpjv0tlVgSuPxd-mitcV0VZKNmcMC=w800-h600-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipMYX5WeKyB7y0csd4KF4SLQwLg2X9RFGWeovdfw=w800-h600-k-no",
];

export default function Gallery() {
  return (
    <section id="galería" className="py-16 lg:py-24 bg-[#2b2b2b] border-t border-[#e0e0e0]">
      <div className="container">
        <h2 className="text-white font-bold uppercase tracking-[0.12em] text-2xl lg:text-3xl text-center mb-3">
          Galería
        </h2>
        <p className="text-white/60 text-sm text-center mb-10 tracking-wide">Fotos del negocio</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {photos.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={src}
                alt={`Educadora Canina — foto ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
