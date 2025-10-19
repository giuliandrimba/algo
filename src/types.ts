import type { ArtworkProps } from "@/components/artwork/Artwork"

export type TextContent = {
    type: "text";
    props: {
        value: string;
    };
};

export type ArtworksContent = {
    type: "artworks";
    props: {
        items: Omit<ArtworkProps, 'id'>[];
    };
};

export type ContentType = TextContent | ArtworksContent;

export type Project = {
    id: string
    cover: Omit<ArtworkProps, 'id'>
    content: ContentType[]
}