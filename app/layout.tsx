import type { Metadata } from "next";
import { Gloock, Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const gloock = Gloock({
  variable: "--font-gloock",
  subsets: ["latin"],
  weight: "400",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxury Homes — Premium Websites for Real Estate Agents",
  description:
    "Bespoke, high-converting websites for elite agents and brokerages across the US. Designed to captivate buyers, build trust and close deals faster.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${gloock.variable} ${instrumentSerif.variable} ${outfit.variable}`}
    >
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
