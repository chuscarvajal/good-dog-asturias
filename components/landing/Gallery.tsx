import Image from "next/image";

// Fotos extraídas directamente del perfil GBP: https://maps.app.goo.gl/uE78NtXFHXtTY5DZ8
const photos = [
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEVZRw0KltbibKqJC3yCa6e1hwkmjjZEaHBtKSGJl14YexUVrf4uM9Ed2c2EhsnmYY2_uuJYnihKFMlOuKXI1X5eLYiBsejw_bid0SNVM3LvXMJHd7937MDrsi_PX90VTG7KXr9=w800-h600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEbwcADd2eGggatY5V4ZU-4O9fRhF_q3k1y_bu14ma38qBOgI0chDFE1KHY8Gc2KtinBfhIW7bI7htKszsRTP3MjiCJQjwTHvXFDxqCCYN3t-zcGCxY9QDz0tIH2-6pmDQ5g64y1g=w800-h600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEBXprg29VKlPP-EQZQj_TfGhbXcHpp7dO_koAl2sLXGiGgoPmLkeNip8g9uaPqCwWnw-voOSXPlLTNe2wgqNliWOabL9Ll1081h3io30AOg1m7Y-hizFHhUh3BWFVQeVjMJTzOLg=w800-h600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHerWfC_C-fHbBj-HjL8FkqlpjOzSK8De9Tfo1yRGTXDSGu0XVIWsPLl6sEB65QnVrpUsb4CHcBiR-YgIG_0qWjRRKgyajSFua6yVe8YzZrW9B4AHRhj0nkj-5gFosLfwo5HGHJ=w800-h600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGDOWnFTav_I_NLnrKJpZLhqN-dD3bQA-dvDZiAwuZzLrK6-5yFPMLCrEd2b4il5FbqGTWEwY0ODgXjzCntM61cCsTZuKGMMB5TWrBm-Pw5NIhI59DF14rNt5_7VJEiOpfFFpgJJQ=w800-h600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGz_Tcce10NtPwgJLt-BGrBIBswCFdbKI7wX7K6ewkqaz1mg0xsw0LfMJx2TzD4UoRTQGZ-OB08GU0FI7-i99cCofqz-uEo4jSIkx3N0sQ9Z99p7K8kggM8s_Axaj_j-7M55a4aPQ=w800-h600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEHTveUOEfAfZrdnHEUrIJgnt-zBffAy2WLnhxiQRC1-0q_1Wrndei3xauE5ZGkfftDKAdQgSdkFEgmPcpzi3u4LGjbY_4bWPFQHMAeZeLIxsIuc7OmmUu30JoPEnBOTmFBG-g8=w800-h600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF9SUBcAU2ItW7IWxyQi1wRsU5YejWvgesJaKVx0zTuZ1nRqw8554_OUpy83rqIQparztpF-K6x_jvEWL-HX4YzsZksi7LN7sV3HUzEfsVhSl5pLrWIFV5ixV5Vsi7L3aHyknZoaQ=w800-h600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFyjgwB3C-i8LR6hatZdpP8Rf4ljfZA9AQ2NPruNCv6xKhNdCIxGL6e1Ce2gZnG7qNaDZ6cbZb2hWVTL7Kn7a43a3vS1m6mPAMGd-2rICiYd_tWEgEWrkT_lqljd9ICyc2b2wMl=w800-h600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFxfFsUg2P6LzRJfe4OIR_Ar-JEfMRAJ-alQnRT6MXknrbIdVdZvuCAz3byF7BEJMITSsUygo9RiBa3MADMbbCtWr85tII7cg91YhG9Y0hQljpPY-b-yg-HLp-JQZTH15zGHwDlug=w800-h600-k-no",
];

export default function Gallery() {
  return (
    <section id="galería" className="py-16 lg:py-24 bg-[#2b2b2b] border-t border-[#e0e0e0]">
      <div className="container">
        <h2 className="text-white font-bold uppercase tracking-[0.12em] text-2xl lg:text-3xl text-center mb-3">
          Galería
        </h2>
        <p className="text-white/60 text-sm text-center mb-10 tracking-wide">Fotos del negocio</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
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
