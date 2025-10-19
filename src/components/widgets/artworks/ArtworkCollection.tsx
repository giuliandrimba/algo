import { Artwork, type ArtworkProps } from "@/components/artwork/Artwork";
import { Header } from "@/components/header/Header";
import { useState } from "react";
import { Project } from "@/types";
import Link from "next/link";

export type ArtworkCollectionProps = {
  items: Project[];
  sortBy?: "grid" | "stack";
  filterBy?: "videos" | "images";
};

export const ArtworkCollection = ({ items }: ArtworkCollectionProps) => {
  const [projects, setProjects] = useState(items);

  const onSearch = async (value: string) => {
    if (!value.length) return setProjects(items);
    const res = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: value, content: items }),
    });
    const data = await res.json();
    setProjects(data);
  };

  return (
    <div>
      <Header onSearch={onSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-20 justify-items-center">
        {projects.map((item, index) => {
          return (
            <Link key={item.id} href={`/${item.id}`}>
              <Artwork {...item.cover} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};
