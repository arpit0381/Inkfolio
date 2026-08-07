import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Inkfolio by Arpit Bajpai — Handwritten Developer Notebook",
    short_name: "Inkfolio",
    description:
      "Arpit's Diary & Engineering Notebook — Interactive handwritten portfolio of Arpit Bajpai, Full Stack Web Developer experienced in React, Next.js, Node.js, and PostgreSQL.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFDF8",
    theme_color: "#D97706",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
