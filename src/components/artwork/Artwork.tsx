import Image from "next/image";

export type ArtworkProps = {
  asset: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  meta: {
    type: 'media' | 'image';
    title: string;
    tech: string;
    date: string;
  };
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  format?: 'cover' | 'full'
};

export const Artwork = ({ meta, className, asset, size = 'sm', format = 'full' }: ArtworkProps) => {
  return (
    <div className="w-sm">
      {meta.type === 'media' && 
        <video className="aspect-auto border-[50px] border-black" src={asset.src} autoPlay={format === 'full'} loop muted>
          <track kind="captions" src="" label="No captions available" />
        </video>
      }
      {meta.type === 'image' && 
        <Image 
          className='aspect-auto border-[50px] border-black'
          src={asset.src} 
          alt={asset.alt || meta.title} 
          width={asset.width || 400}
          height={asset.height || 300}
        />
      }
      {format === 'full' &&
        <p className='text-sm italic pt-5 block'>
          <span className='block'>{meta?.title}</span>
          <span className='block'>{meta?.tech}</span>
          <span className='block'>{meta?.date}</span>
        </p>
      }
    </div>
  );
};
