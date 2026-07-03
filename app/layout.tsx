import type { Metadata } from "next";
import { Oswald, Archivo } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kigali Kicks",
  description: "Rwanda's home for authentic, hand-curated sneakers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${archivo.variable}`}>
      <body className="bg-ink text-white" style={{ fontFamily: "var(--font-archivo), 'Archivo', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
