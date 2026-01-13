import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOUC 2026 - Octavario por la Unidad de los Cristianos",
  description: "Descarga la APP oficial CEDIC SOUC 2026. Reflexiones, misas audio y subsidios para el Octavario por la unidad de los cristianos (18-25 Enero).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
