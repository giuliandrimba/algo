import { Artwork, type ArtworkProps } from "@/components/artwork/Artwork";
import { Header } from "@/components/header/Header";
import { useState } from "react";

export type ArtworkCollectionProps = {
  items: ArtworkProps[];
  sortBy?: "grid" | "stack";
  filterBy?: "videos" | "images";
};

export const ArtworkCollection = ({ items }: ArtworkCollectionProps) => {
  const [ projects, setProjects ] = useState(items);

  const onSearch = async (value:string) => {
    if (!value.length) return setProjects(items)
    const res = await fetch("/api/search", {
     method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: value, content: items })
    });
     const data = await res.json();
     setProjects(data)
  }

  return (
    <div>
      <Header onSearch={onSearch} />
      <div className='flex flex-row flex-wrap gap-60 justify-between'>
        {projects.map((item, index) => {
          return <Artwork key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};
