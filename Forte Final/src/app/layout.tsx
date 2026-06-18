import type { Metadata } from "next";
import { Inter, Aboreto, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/hooks/ScrollProvider";
import ScrollToTop from "@/components/ScrollToTop";

// Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Aboreto
const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Cormorant Garamond — elegant serif for service titles
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// DM Sans — modern clean for body/description
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forte Digital",
  description: "Powering Telecom Monetization & AI-Driven Digital Experiences",
  icons: {
    icon: "/forte-logo.png",
    apple: "/forte-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${aboreto.variable} ${cormorant.variable} ${dmSans.variable} antialiased`}>
        <ScrollProvider>
          <ScrollToTop />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
