import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-white text-ink"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
