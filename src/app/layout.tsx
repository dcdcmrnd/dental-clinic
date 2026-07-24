import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScrollProvider from "@/lib/lenis-context";
import "maplibre-gl/dist/maplibre-gl.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://www.gentlesmilesdental.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gentle Smiles Dental Clinic | Davao City",
  description:
    "Gentle Smiles Dental Clinic in Davao City offers calm, modern dental care for the whole family. Book your visit for cleanings, implants, orthodontics, and more.",
  openGraph: {
    title: "Gentle Smiles Dental Clinic | Davao City",
    description:
      "Calm, modern dental care in Davao City. Book your visit with Gentle Smiles Dental Clinic.",
    url: siteUrl,
    siteName: "Gentle Smiles Dental Clinic",
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-white text-ink"
        suppressHydrationWarning
      >
        <BackgroundCanvas />
        <CustomCursor />
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
