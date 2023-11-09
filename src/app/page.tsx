import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil - Lycée Voillaume",
  description: "Site officiel du lycée Voillaume",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 max-[500px]:max-w-xs max-[500px]:items-stretch"></div>
  );
}
