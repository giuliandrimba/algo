"use client";
import { ArtworkCollection } from "@/components/widgets/artworks/ArtworkCollection";
import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const { items } = useAppContext();

  return (
      <div>
        <ArtworkCollection items={items} />
      </div>
  );
}
