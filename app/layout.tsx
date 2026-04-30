import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Luxury Homes — Premium Websites for Real Estate Agents",
  description:
    "We craft bespoke, high-converting websites for elite real estate agents — designed to captivate buyers, build trust, and close deals faster.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          background: "var(--dark)",
          color: "#e8e8ec",
        }}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
