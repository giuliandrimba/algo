import type { ArtworkProps } from "@/components/artwork/Artwork"

export type TextContent = {
    type: "text";
    props: {
        value: string;
    };
};

export type ArtworksContent = {
    type: "artworks";
    props: ArtworkProps;
};

export type ContentType = TextContent | ArtworksContent;

export type Project = {
    id: string
    slug: string
    cover: ArtworkProps
    content: ContentType[]
}