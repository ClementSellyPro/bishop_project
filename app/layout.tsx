import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Les fous de Sin-Dni | Club d'échecs Saint-Denis",
  description:
    "Club d'échecs de Saint-Denis de la Réunion, cours d'échces, tournois et événements pour tous les niveaux.",
  keywords: [
    "club d'échecs",
    "Saint-Denis",
    "club echecs saint denis",
    "cours d'échecs",
    "tournois d'échecs",
    "événements d'échecs",
    "échecs pour tous les niveaux",
  ],
  openGraph: {
    title: "Les fous de Sin-Dni | Club d'échecs Saint-Denis",
    description:
      "Club d'échecs de Saint-Denis de la Réunion, cours d'échces, tournois et événements pour tous les niveaux.",
    url: "https://lesfousdesindni.com/",
    siteName: "Les fous de Sin-Dni | Club d'échecs Saint-Denis",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
