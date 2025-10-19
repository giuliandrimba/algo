import { Hero } from "@/components/hero/Hero";
import HeroJPEG from "../assets/hero.jpg";
import { Text } from "@/components/text/Text";
import { Container } from "@/components/blocks/Container";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import fetchItems from "@/lib/fetchItems";

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
              <footer className="row-start-3 flex gap-[24px] mt-60 flex-wrap items-center justify-center bg-white">
                <Text>
                  @2025
                </Text>
              </footer>
            </Container>
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
