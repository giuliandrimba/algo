import type { ContentType, Project } from "@/types";
import { faker } from "@faker-js/faker";

export default async (): Promise<Project[]> => {
  const items = [];

  let images = ["/assets/image-2.jpg", "/assets/image-3.jpg", "/assets/image-5.jpg"]
  const getRndImage = () => images[Math.floor(Math.random() * images.length)];

  for (let i = 0; i < 12; i++) {
    const isVideo = Math.random() < 0.5;
    const item = {
      id: i.toString(),
      slug: faker.lorem.slug(),
      cover: {
        asset: {
          src: isVideo ? "/assets/video.mp4" : getRndImage(),
          alt: faker.book.title(),
        },
        meta: {
          type: isVideo ? "video" : "image",
          title: faker.word.noun(),
          tech: faker.word.words(),
          date: faker.date.past().toDateString(),
        },
      },
      content: [] as ContentType[],
    };

    for (let j = 0; j < Math.round(Math.random() * 10); j++) {
      const isText = Math.random() < 0.5;
      if (isText) {
        item.content.push({
          type: "text",
          props: {
            value: faker.lorem.sentences(),
          },
        });
      } else {
        item.content.push({
          type: "artworks",
          props: {
            asset: {
              src: getRndImage(),
              alt: "Artwork",
            },
            meta: {
              type: "image",
              title: faker.word.noun(),
              tech: "Many",
              date: "Today",
            },
          },
        });
      }
    }

    items.push(item);
  }

  return items;
}