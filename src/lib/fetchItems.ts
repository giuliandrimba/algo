import type { ContentType, Project } from "@/types";
import { faker } from "@faker-js/faker";
import { capitalize } from "lodash";

export default async (): Promise<Project[]> => {
  const items = [];

  let images = ["/assets/image-2.jpg", "/assets/image-3.jpg", "/assets/image-5.jpg"]
  let tech = ['Javascript / GLSL', 'Python', 'Lua', 'Unity', 'C++']

  let artworks = [
    {
      title: 'Fractal Garden',
      description: 'Generated from recursive equations, this piece depicts a garden that grows endlessly inward. Every branch contains the memory of its origin, yet no two leaves are ever the same. It invites the viewer to lose themselves in a pattern that has no beginning and no end.'
    },
    {
      title: 'Perlin Drift',
      description: 'Using layers of Perlin noise, the algorithm paints an ocean that never repeats its motion. The result feels organic — like wind passing over water — though it is born entirely from math. Its rhythm is both familiar and alien, evoking the illusion of life in code.'
    },
    {
      title: 'Machine’s Hand',
      description: 'This work explores the tension between human imperfection and computational precision. Lines are drawn by an algorithm designed to simulate hesitation — the visual equivalent of doubt. The result is unsettling: a machine that seems to stutter as it learns how to create.'
    },
    {
      title: 'Entropy Study #7',
      description: 'Pixels are programmed to decay over time, fading, glitching, and dispersing according to rules of entropy. The artwork changes with every viewing, a digital memento mori reminding us that even in systems built to last forever, disorder always wins.'
    },
    {
      title: 'Procedural City',
      description: 'An entire city is generated from a single line of code. Skyscrapers rise according to random seeds, streets branch like veins, and artificial sunlight falls with calculated precision. The city feels eerily familiar — as if it remembers the human cities it was trained on.'
    },
    {
      title: 'Neural Memory',
      description: 'This piece was trained on thousands of images of dreams, landscapes, and forgotten faces. The neural network reconstructs what it “remembers,” resulting in ghostly fragments of imagined worlds. It is not the memory of a human, but of a machine longing to recall one.'
    },
    {
      title: 'Emergent Geometry',
      description: 'Simple mathematical rules give rise to intricate shapes that appear to grow of their own will. Over time, the system organizes chaos into structure, suggesting that beauty may be an emergent property of logic itself.'
    },
    {
      title: 'Data Bloom',
      description: 'Here, datasets are visualized as living organisms. Numbers blossom into petals, graphs transform into stems, and code becomes the soil from which the artwork grows. The piece reimagines information not as cold or static, but as something capable of organic expression.'
    },
    {
      title: 'Feedback Loop',
      description: 'The algorithm continuously reprocesses its own output, layering noise upon noise until the image collapses into abstraction. The artwork is never final; it exists in a state of infinite revision, mirroring how technology evolves — and how it forgets.'
    },
    {
      title: 'Gradient Logic',
      description: 'Color becomes language in this study of controlled transitions. Gradients shift according to mathematical precision, yet evoke emotional depth beyond their code. It’s a portrait of reason feeling its way toward beauty.'
    },
    {
      title: 'Code Nebula',
      description: 'Particles swarm in three-dimensional space, guided by formulas that mimic gravitational attraction. The piece behaves like a living galaxy — unpredictable, luminous, and self-organizing. Viewers watch as randomness condenses into order, a digital echo of cosmic creation.'
    },
    {
      title: 'Autonomous Composition',
      description: 'No artist intervened in this work. The system generates, critiques, and revises its own visual output, governed only by rules it wrote for itself. The result is haunting — a painting born not of intention, but of algorithmic self-awareness.'
    }
  ]

  const getRndImage = () => images[Math.floor(Math.random() * images.length)];
  const getRandomTech = () => tech[Math.floor(Math.random() * tech.length)];

  for (let i = 0; i < artworks.length; i++) {
    const art = artworks[i]
    const isVideo = Math.random() < 0.5;
    const item = {
      id: i.toString(),
      slug: faker.lorem.slug(),
      cover: {
        asset: {
          src: isVideo ? "/assets/video.mp4" : getRndImage(),
          alt: capitalize(faker.book.title()),
        },
        meta: {
          type: isVideo ? "video" : "image",
          title: art.title,
          tech: getRandomTech(),
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
            value: `${j}. ${art.description}`,
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
              title: capitalize(faker.word.noun()),
              tech: getRandomTech(),
              date: faker.date.past().toDateString(),
            },
          },
        });
      }
    }

    items.push(item);
  }

  return items;
}