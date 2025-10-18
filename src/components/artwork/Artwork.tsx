import ArtworkJPEG from "@/assets/artwork.jpg";
import Image, { type ImageProps } from "next/image";

export type ArtworkProps = {
  asset: ImageProps | HTMLVideoElement;
  meta: {
    title: string;
    tech: string;
    date: string;
  };
  className?: string;
};

export const Artwork = ({ meta, className }: ArtworkProps) => {
  return (
    <div>
      <Image src={ArtworkJPEG} alt="Giulian Drimba" />
      <p className='text-sm italic pt-5 block'>
        <span className='block'>{meta?.title}</span>
        <span className='block'>{meta?.tech}</span>
        <span className='block'>{meta?.date}</span>
      </p>
    </div>
  );
};
