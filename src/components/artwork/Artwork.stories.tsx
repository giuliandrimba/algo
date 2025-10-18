import ArtworkJPEG from "@/assets/artwork.jpg";
import ArtworkMP4 from "@/assets/video.mp4";
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
        type: 'image',
        title: 'Untitled',
        tech: 'Javascript / GLSL',
        date: '12/12/12',
    }
  },
  render: (args: ArtworkProps) => <Artwork { ...args }></Artwork>,
};

export const Video = {
  args: {
    asset: {
        src: ArtworkMP4,
        alt: "Giulian Drimba"
    },
    meta: {
        type: 'media',
        title: 'Untitled',
        tech: 'Javascript / GLSL',
        date: '12/12/12',
    }
  },
  render: (args: ArtworkProps) => <Artwork { ...args }></Artwork>,
};

