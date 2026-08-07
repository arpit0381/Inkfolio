import type { Metadata } from "next";
import { Patrick_Hand, Caveat, Kalam } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
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
  metadataBase: new URL("https://arpitbajpai.in"),
  title: {
    default: "Arpit Bajpai — Handwritten Developer Notebook | Inkfolio by Arpit Bajpai (Arpit's Diary)",
    template: "%s | Arpit Bajpai — Inkfolio",
  },
  description:
    "Explore Inkfolio by Arpit Bajpai (Arpit's Diary) — India's premier interactive handwritten developer notebook & portfolio of Arpit Bajpai. Full Stack Software Engineer experienced in React, Next.js, Node.js, and PostgreSQL. Creator of FormStuff, LifeReceipt, Sulax Solar Website, and ClubSphere.",
  keywords: [
    "Arpit Bajpai",
    "arpit bajpai",
    "Inkfolio",
    "inkfolio",
    "Inkfolio by Arpit Bajpai",
    "inkfolio by arpit bajpai",
    "Arpit's Diary",
    "arpits diary",
    "Arpit's Notebook",
    "Arpit Bajpai Portfolio",
    "arpitbajpai.in",
    "Arpit Bajpai Kanpur",
    "Arpit Bajpai PSIT",
    "Arpit Bajpai Developer",
    "Full Stack Web Developer",
    "React Developer India",
    "Next.js Developer Kanpur",
    "FormStuff",
    "FormStuff.in",
    "LifeReceipt",
    "LifeReceipt.in",
    "Sulax Solar Website",
    "ClubSphere",
    "Logic Club President PSIT",
    "Handwritten Developer Portfolio"
  ],
  authors: [{ name: "Arpit Bajpai", url: "https://arpitbajpai.in" }],
  creator: "Arpit Bajpai",
  publisher: "Arpit Bajpai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://arpitbajpai.in",
    languages: {
      "en-US": "https://arpitbajpai.in",
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Arpit Bajpai — Handwritten Developer Notebook | Inkfolio by Arpit Bajpai",
    description:
      "Official interactive handwritten engineering notebook, developer portfolio, and personal diary of Arpit Bajpai (Inkfolio / Arpit's Diary).",
    url: "https://arpitbajpai.in",
    siteName: "Inkfolio by Arpit Bajpai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Bajpai — Inkfolio (Arpit's Diary)",
    description:
      "Interactive handwritten engineering notebook & portfolio of Arpit Bajpai. Built with React, Next.js, Node.js & PostgreSQL.",
    creator: "@arpit0381",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_TOKEN_HERE",
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
      <head>
        <JsonLd />
      </head>
      <body className="antialiased font-handwritten bg-[#FFFDF8] dark:bg-[#121214] text-[#111111] dark:text-[#F3F4F6] selection:bg-yellow-200 selection:text-black transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

