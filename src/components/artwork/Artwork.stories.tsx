import ArtworkJPEG from "@/assets/artwork.jpg";
import { Artwork, type ArtworkProps } from "./Artwork";

export default {
  title: "Assets/Artwork",
  component: Artwork,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    asset: {
        src: ArtworkJPEG,
        alt: "Giulian Drimba"
    },
    meta: {
        title: 'Untitled',
        tech: 'Javascript / GLSL',
        date: '12/12/12',
    }
  },
  render: (args: ArtworkProps) => <Artwork { ...args }></Artwork>,
};
