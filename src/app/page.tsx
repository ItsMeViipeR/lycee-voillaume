import { Slideshow } from "@/components/Slideshow";
import { Metadata } from "next";
import { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Accueil - Lycée Voillaume",
  description: "Site officiel du lycée Voillaume",
};

export default function Home() {
  const slides = [
    {
      url: "https://picsum.photos/seed/1/580/280",
    },
    {
      url: "https://picsum.photos/seed/2/580/280",
    },
    {
      url: "https://picsum.photos/seed/3/580/280",
    },
  ];

  const containerStyles: CSSProperties = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 max-[500px]:max-w-xs max-[500px]:items-stretch">
      <div>
        <div style={containerStyles}>
          <Slideshow slides={slides} parentWidth={500} />
        </div>
      </div>
    </div>
  );
}
