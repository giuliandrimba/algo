import { Artwork, type ArtworkProps } from "@/components/artwork/Artwork";
import { Header } from "@/components/header/Header";
import { useState } from "react";
import { Project } from "@/types";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // delay between children
      },
    },
  };

  return (
    <div>
      <Header onSearch={onSearch} />
      <motion.div 
        key={projects.join(",")}
        initial="hidden"
        variants={containerVariants}
        animate="visible"
        className="w-full  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-6 md:gap-y-20 justify-items-center items-center">
        {projects.map((item, index) => {
          return (
            <Link
              className="w-max flex items-center justify-center mb-20"
              key={item.id}
              href={`/${item.id}`}
            >
              <Artwork {...item.cover} />
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};
