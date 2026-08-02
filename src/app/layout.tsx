import type { Metadata } from "next";
import { Patrick_Hand, Caveat, Kalam } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arpit Bajpai — Handwritten Developer Notebook | Inkfolio",
  description:
    "Explore the engineering notebook of Arpit Bajpai, Full Stack Developer experienced in React, Next.js, Node.js, and PostgreSQL. Interactive handwritten experience, sticky notes, paper physics, and live project breakdowns.",
  keywords: [
    "Arpit Bajpai",
    "Inkfolio",
    "Full Stack Developer Portfolio",
    "Handwritten Web Portfolio",
    "React Developer",
    "Next.js Developer",
    "Kanpur Developer",
  ],
  authors: [{ name: "Arpit Bajpai" }],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Arpit Bajpai — Handwritten Developer Notebook",
    description:
      "India's most unique handwritten developer portfolio experience.",
    url: "https://github.com/arpit0381/Inkfolio",
    siteName: "Inkfolio",
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
      className={`${patrickHand.variable} ${caveat.variable} ${kalam.variable} scroll-smooth`}
    >
      <body className="antialiased font-handwritten bg-[#FFFDF8] dark:bg-[#121214] text-[#111111] dark:text-[#F3F4F6] selection:bg-yellow-200 selection:text-black transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
