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
        src: '/assets/image-2.jpg',
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
        src: '/assets/video.mp4',
        alt: "Giulian Drimba"
    },
    meta: {
        type: 'video',
        title: 'Untitled',
        tech: 'Javascript / GLSL',
        date: '12/12/12',
    }
  },
  render: (args: ArtworkProps) => <Artwork { ...args }></Artwork>,
};

export const Cover = {
  args: {
    asset: {
         src: '/assets/video.mp4',
        alt: "Giulian Drimba"
    },
    format: 'cover',
    meta: {
        type: 'video',
        title: 'Untitled',
        tech: 'Javascript / GLSL',
        date: '12/12/12',
    }
  },
  render: (args: ArtworkProps) => <Artwork { ...args }></Artwork>,
};

