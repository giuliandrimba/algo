import HeroJPEG from "@/assets/Hero.jpg";
import { Hero, type HeroProps } from "./Hero";

export default {
  title: "Widgets/Hero",
  component: Hero,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    asset: {
        src: HeroJPEG,
        alt: "Giulian Drimba"
    },
  },
  render: (args: HeroProps) => <Hero { ...args }></Hero>,
};

