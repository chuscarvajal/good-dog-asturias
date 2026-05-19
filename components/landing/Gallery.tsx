import Image from "next/image";

const photos = [
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEBXprg29VKlPP-EQZQj_TfGhbXcHpp7dO_koAl2sLXGiGgoPmLkeNip8g9uaPqCwWnw-voOSXPlLTNe2wgqNliWOabL9Ll1081h3io30AOg1m7Y-hizFHhUh3BWFVQeVjMJTzOLg=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEyh44zFhc7HBU5xgdqN9gDJyuMlktQTICETLTyJJ9OEiK5LLGzhW4WzjAVEBnnSQibabvzTxzZPMLMx9-5Lx1IcfpNsTzI_kj9VsJ-hVdt60zlCTBvmKM2edxfHA7tfrc304Rw3A=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE8T29AB9qIh_KRU3ejStCKY_7kJK1cINDIobIbbxw460dX45wdUiZFZak9J7631zRxCT8ivQLN8h1b8mN-luln8YN-CDqIn-0CpLlbXvbl_QViWDf4ZY5CzicNabuslEyXH3EmBVBSg8A=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE9SLx05wBABnpMqwt0XSb36mUxj0BB-EgJYsduHKKGaeB1uFfdqU85qBDN3eNYQq2IJQEAdgCTnLZlUpH9FRFm7Si5HLfpNmLhA_tVeQPPuVLDW-T6bgmv9db9BQeX1TnbLDA77fJvLxc=w800-h533-k-no",
];

export default function Gallery() {
  return (
    <section id="galería" className="py-16 lg:py-24 bg-[#2b2b2b] border-t border-[#e0e0e0]">
      <div className="container">
        <h2 className="text-white font-bold uppercase tracking-[0.12em] text-2xl lg:text-3xl text-center mb-3">
          Galería
        </h2>
        <p className="text-white/60 text-sm text-center mb-10 tracking-wide">Fotos del negocio</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {photos.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={src}
                alt={`Galería Good Dog ${i + 1}`}
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
