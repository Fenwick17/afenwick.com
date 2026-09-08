import { sanityClient } from 'sanity:client';
import { formatDate } from '../utils/formatDate';
import type { BlogPost } from '@types';

// Resolves internal link references inside the portable text body so the
// Link component can build a `/blog/<slug>` URL for them.
const blogDetailProjection = `{
  title,
  slug,
  body[] {
    ...,
    markDefs[] {
      ...,
      internalLink-> {
        slug
      }
    }
  },
  teaser,
  publishedAt,
  mainImage,
  categories[]->{title}
}`;

const blogListProjection = `{
  title,
  slug,
  teaser,
  publishedAt,
  mainImage,
  categories[]->{title}
}`;

export async function getBlogs(): Promise<BlogPost[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc) ${blogListProjection}`;
  const posts = await sanityClient.fetch<BlogPost[]>(query);
  posts.forEach((post) => {
    post.publishedAt = formatDate(post.publishedAt);
  });
  return posts;
}

export async function getLatestBlogs(): Promise<BlogPost[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc) ${blogListProjection}[0...3]`;
  const posts = await sanityClient.fetch<BlogPost[]>(query);
  posts.forEach((post) => {
    post.publishedAt = formatDate(post.publishedAt);
  });
  return posts;
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const query = `*[_type == "blog" && slug.current == $slug][0] ${blogDetailProjection}`;
  const blogPost = await sanityClient.fetch<BlogPost>(query, { slug });
  return blogPost;
}
