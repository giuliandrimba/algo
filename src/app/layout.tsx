import { Hero } from "@/components/hero/Hero";
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
            <Hero asset={{ src: '/assets/hero.jpg', alt: "" }} />

            <Container className="relative bg-white">
              <Text className="mt-[70px] block pb-[120px]">
                Algo is a pioneering art collective that curates and showcases works generated through code. Blending creativity with computation, Algo brings together artists, designers, and technologists who use algorithms, data, and digital systems as their brushes. Each curated piece reflects the beauty of logic, randomness, and human intention — where art meets algorithm.
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
