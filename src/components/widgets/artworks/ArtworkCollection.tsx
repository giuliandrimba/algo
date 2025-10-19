import { Artwork, type ArtworkProps } from "@/components/artwork/Artwork";
import { Header } from "@/components/header/Header";

export type ArtworkCollectionProps = {
  items: ArtworkProps[];
  sortBy?: "grid" | "stack";
  filterBy?: "videos" | "images";
};

export const ArtworkCollection = ({ items }: ArtworkCollectionProps) => {
  return (
    <div>
      <Header />
      {items.map((item, index) => {
        return <Artwork key={item.id} {...item} />;
      })}
    </div>
  );
};
