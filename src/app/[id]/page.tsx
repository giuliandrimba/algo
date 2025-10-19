"use client";
import { useAppContext } from "@/context/AppContext";
import { useParams } from "next/navigation";
import type { Project, ContentType } from "@/types";
import { Text } from "@/components/text/Text";
import { Artwork } from "@/components/artwork/Artwork";
import { useEffect, useState } from "react";
import { Button } from "@/components/button/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const { items } = useAppContext();
  const [project, setProject] = useState<Project | null>(null);
  const params = useParams();
  const id = params.id;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (items && items.length > 0) {
      const found =
        items.find((item: Project) => item.id.toString() === id) || null;
      setProject(found);
    }
  }, [items, id]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      transition={{ duration: 0.35, delay: 0 }}
      className="flex flex-col justify-center gap-20 w-full items-center"
    >
      <Button as={Link} href="/">
        Back
      </Button>
      {project && <Artwork className="mb-20" {...project.cover} />}
      {project?.content.map((content: ContentType, index: number) => {
        if (content.type === "text") {
          return (
            <motion.div
              key={content.props.value}
              className="max-w-[95%] lg:max-w-[50%]"
            >
              <Text className="mb-40">{content.props.value}</Text>
            </motion.div>
          );
        }
        return (
          <Artwork
            className="mb-40"
            key={content.props.meta.title}
            {...content.props}
          />
        );
      })}
    </motion.section>
  );
}
