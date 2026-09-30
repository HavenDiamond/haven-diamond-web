import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--sans", display: "swap" });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F7F6F1",
};

export const metadata = {
  title: "Haven Diamond — Shortlets & Concierge in Lagos",
  description: "Curated shortlet apartments and personal concierge services across Lagos. Book directly on WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}