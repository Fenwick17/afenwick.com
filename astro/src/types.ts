import type { PortableTextBlock } from '@portabletext/types';

interface BlogPost {
  title: string;
  slug: string;
  author: string;
  publishedAt: string;
  body: PortableTextBlock;
  categories: string[];
  teaser: string;
  mainImage: Image;
}

interface Image {
  _type: string;
  alt: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export type { BlogPost, Image };
