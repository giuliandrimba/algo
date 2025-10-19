import { Hero } from "@/components/hero/Hero";
import HeroJPEG from "../assets/hero.jpg";
import { Text } from "@/components/text/Text";
import { Container } from "@/components/blocks/Container";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import type { Project, ContentType } from "@/types";
import { faker } from "@faker-js/faker";

async function fetchItems(): Promise<Project[]> {
  const items = []

  for (let i = 0; i < 12; i++) {
    const item = {
      id: faker.string.uuid(),
      cover: {
        asset: {
          src: "/assets/artwork.jpg",
          alt: faker.book.title(),
        },
        meta: {
          type: "image",
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
            items: [
              {
                asset: {
                  src: "/assets/artwork.jpg",
                  alt: "Artwork",
                },
                meta: {
                  type: "image",
                  title: "asdasd",
                  tech: "Many",
                  date: "Today",
                },
              },
            ],
          },
        });
      }
    }

    items.push(item)
  }
  
  return items;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items = await fetchItems(); // server-side fetch once
  return (
    <html lang="en">
      <body>
        <AppProvider initialProducts={items}>
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <Hero asset={{ src: HeroJPEG, alt: "" }} />

            <Container className="relative bg-white">
              <Text className="mt-[70px] block pb-[120px]">
                Contemporary painter known for her ethereal use of color and
                texture. Her work explores the intersection between memory and
                landscape, often blending dreamlike horizons with fragmented
                human figures. Through layered acrylics and subtle metallic
                accents, she captures the tension between permanence and decay.
              </Text>
              <section>{children}</section>
              <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-white">
                <Text>
                  A F O R M A . is a curation of artworks generated with code,
                  by coders.
                </Text>
                <Text>@2025</Text>
              </footer>
            </Container>
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
