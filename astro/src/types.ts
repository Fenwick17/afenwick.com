import type { PortableTextBlock } from '@portabletext/types';

interface BlogPost {
  title: string;
  slug: string;
  author: string;
  publishedAt: string;
  body: PortableTextBlock;
}

export type { BlogPost };
