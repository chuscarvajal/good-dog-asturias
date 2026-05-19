import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Good Dog | Adiestramiento Canino en Asturias",
  description: "Adiestramiento canino en Allende, Asturias. Educación positiva, socialización y modificación de conducta en plena naturaleza asturiana. 4.8★ en Google.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
