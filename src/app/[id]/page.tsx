"use client";
import { useAppContext } from "@/context/AppContext";
import { useParams } from "next/navigation";
import type { Project, ContentType } from "@/types";
import { Text } from "@/components/text/Text";
import { Artwork } from "@/components/artwork/Artwork";
import { useEffect, useState } from "react";
import { Button } from '@/components/button/Button'
import Link from "next/link";

export default function ProjectPage() {
  const { items } = useAppContext();
  const [project, setProject] = useState<Project | null>(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (items && items.length > 0) {
      const found = items.find((item: Project) => item.id.toString() === id) || null;
      setProject(found);
    }
  }, [items, id]);

  return (
    <section className="flex flex-col justify-center gap-20 w-full items-center pb-60">
      <Button as={Link} href='/'>Back</Button>
      {project && <Artwork className="mb-20" {...project.cover} />}
      {project?.content.map((content: ContentType, index: number) => {
        if (content.type === "text") {
          return (
            <div key={content.props.value} className="max-w-[95%] lg:max-w-[50%]">
              <Text className="mb-40">
                {content.props.value}
              </Text>
            </div>
          );
        }
        return <Artwork className="mb-40" key={content.props.meta.title} {...content.props} />;
      })}
    </section>
  );
}
