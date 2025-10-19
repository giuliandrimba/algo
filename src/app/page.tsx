"use client";
import { ArtworkCollection } from "@/components/widgets/artworks/ArtworkCollection";
import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const { items } = useAppContext();
  const collection = items.map((item) => {
    return {
      id: item.id,
      ...item.cover
    }
  })

  return (
      <div>
        <ArtworkCollection items={collection} />
      </div>
  );
}
