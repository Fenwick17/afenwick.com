import { useSanityClient, groq } from 'astro-sanity';
import { formatDate } from '../utils/formatDate';
import type { BlogPost } from '@types';

export async function getBlogs(): Promise<[]> {
  const query = groq`*[_type == "blog"]`;
  const posts = await useSanityClient().fetch(query);
  posts.forEach((post: BlogPost) => {
    post.publishedAt = formatDate(post.publishedAt);
  });
  return posts;
}

export async function getBlogPost(slug: string): Promise<[]> {
  const query = groq`*[_type == "blog" && slug.current == "${slug}"]`;
  const blogPost = await useSanityClient().fetch(query);
  return blogPost[0];
}
