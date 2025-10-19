import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type HeroProps = {
  children?: ReactNode,
  asset: {
    src: string | StaticImageData;
    alt?: string;
    width?: number;
    height?: number;
  };
  meta?: {
    type: 'media' | 'image';
    title: string;
    tech: string;
    date: string;
  };
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  format?: 'cover' | 'full'
};

export const Hero = ({ meta, className, asset, size = 'sm', format = 'full', children }: HeroProps) => {
  return (
    <div className="bg-white">
      <div className='w-screen h-screen relative bg-white'>
        {meta?.type === 'media' && typeof asset.src === 'string' && 
          <video className="object-cover w-screen h-screen fixed top-0 right-0 z-0" src={asset.src} autoPlay={format === 'full'} loop muted>
            <track kind="captions" src="" label="No captions available" />
          </video>
        }
        {(meta?.type === 'image' || !meta) && 
          <Image 
            quality={80}
            className='object-cover w-screen h-screen fixed top-0 right-0 z-0'
            src={asset.src} 
            alt={asset.alt || meta?.title || 'Hero image'} 
            width={asset.width || 3454}
            height={asset.height || 1914}
          />
        }
      </div>
      <span className="mt-[70px] block pl-[120px] pb-[80px] pr-[120px] max-width-[1120] bg-white">
        {children}
      </span>
    </div>
  );
};
