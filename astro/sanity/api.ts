import { useSanityClient, groq } from 'astro-sanity';

export async function getBlogs(): Promise<[]> {
  const query = groq`*[_type == "blog"]`;
  const posts = await useSanityClient().fetch(query);
  return posts;
}

export async function getBlogPost(slug: string): Promise<[]> {
  const query = groq`*[_type == "blog" && slug.current == "${slug}"]`;
  const blogPost = await useSanityClient().fetch(query);
  return blogPost[0];
}
