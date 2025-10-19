"use client";
import { useAppContext } from "@/context/AppContext";
import { useParams } from "next/navigation";
import type { Project, ContentType } from "@/types";
import { Text } from "@/components/text/Text";
import { Artwork } from "@/components/artwork/Artwork";


export default function ProjectPage() {
  const { items } = useAppContext();
  const params = useParams();
  const id = params.id;
  // const content = items.find((item: Project) => item.id === id);
  const content = items[0]

  console.log(content)

  // console.log(items, params.id)

  return (
      <section className=" justify-center gap-20 w-full">
        {content.content.map((content: ContentType, index: number) => {
          if (content.type === 'text') {
            return <Text className="mb-20" key={content.props.value}>{content.props.value}</Text>
          }
          return <Artwork className="mb-20" key={index} {...content.props} />
        })}
      </section>
  );
}
