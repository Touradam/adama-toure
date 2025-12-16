import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adama Touré - Energy Security & Climate Resilience",
  description: "Improving energy security and climate resilience through smart solar technology, community empowerment, and sustainable innovation.",
  keywords: ["energy security", "climate resilience", "solar panels", "SEPT", "N'Ko", "solar thermal", "AI education"],
  authors: [{ name: "Adama Touré" }],
  openGraph: {
    title: "Adama Touré - Energy Security & Climate Resilience",
    description: "Improving energy security and climate resilience through smart solar technology, community empowerment, and sustainable innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

