import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://landingpage-souc.vercel.app"),
  title: "CEDIC SOUC 2027 | México - Conferencia del Episcopado Mexicano",
  description: "Descarga la aplicación oficial CEDIC SOUC 2027 de la Comisión Episcopal para el Diálogo Interreligioso y la Comunión (CEM). Subsidios litúrgicos, reflexiones del Octavario, lector con audio, mapa de diversidad religiosa en México y red comunitaria de oración.",
  keywords: [
    "CEDIC",
    "SOUC 2027",
    "CEM",
    "Conferencia del Episcopado Mexicano",
    "Diálogo Interreligioso",
    "Ecumenismo",
    "Semana de Oración por la Unidad de los Cristianos",
    "Liturgia",
    "Diversidad Religiosa México",
    "INEGI 2020",
    "Oraciones",
    "Velas Virtuales"
  ],
  openGraph: {
    title: "CEDIC SOUC 2027 | México - App Oficial",
    description: "Aplicación pastoral de la Comisión Episcopal para el Diálogo Interreligioso y la Comunión (CEM). Semana de Oración por la Unidad de los Cristianos, liturgia con audio, diversidad religiosa y red de oración.",
    url: "https://landingpage-souc.vercel.app",
    siteName: "CEDIC SOUC 2027 | México",
    images: [
      {
        url: "/CEM-CEDIC.png",
        width: 768,
        height: 277,
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
