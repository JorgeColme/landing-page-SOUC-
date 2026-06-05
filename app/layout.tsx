import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CEDIC SOUC 2026 | App Oficial",
  description: "Descarga la aplicación oficial CEDIC SOUC 2026 de la Conferencia del Episcopado Mexicano. Accede a reflexiones diarias, materiales litúrgicos, audios y oraciones para vivir tu fe en todo momento.",
  keywords: ["CEDIC", "SOUC 2026", "CEM", "Iglesia Católica", "reflexiones", "misas", "pastoral", "oraciones", "aplicación oficial"],
  openGraph: {
    title: "CEDIC SOUC 2026 | App Oficial",
    description: "Descarga la aplicación oficial CEDIC SOUC 2026 de la Conferencia del Episcopado Mexicano. Accede a reflexiones diarias, materiales litúrgicos, audios y oraciones.",
    url: "https://landingpage-souc.vercel.app",
    siteName: "CEDIC SOUC 2026",
    images: [
      {
        url: "/logo-cedic.jpg",
        width: 800,
        height: 600,
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
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
