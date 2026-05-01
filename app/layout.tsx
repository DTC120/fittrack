import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitTrack",
  description: "Gestión de gimnasio, tienda y clases con FitTrack.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
