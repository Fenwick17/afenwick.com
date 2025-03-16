import { sanityClient } from 'sanity:client';
import { formatDate } from '../utils/formatDate';
import type { BlogPost, Project } from '@types';

export async function getBlogs(): Promise<[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    title,
    slug,
    body,
    teaser,
    publishedAt,
    mainImage,
    categories[]->{title}
  }`;
  const posts = await sanityClient.fetch(query);
  posts.forEach((post: BlogPost) => {
    post.publishedAt = formatDate(post.publishedAt);
  });
  return posts;
}

export async function getLatestBlogs(): Promise<[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    title,
    slug,
    body,
    teaser,
    publishedAt,
    mainImage,
    categories[]->{title}
  }[0...2]`;
  const posts = await sanityClient.fetch(query);
  posts.forEach((post: BlogPost) => {
    post.publishedAt = formatDate(post.publishedAt);
  });
  return posts;
}

export async function getBlogPost(slug: string): Promise<[]> {
  const query = `*[_type == "blog" && slug.current == "${slug}"]`;
  const blogPost = await sanityClient.fetch(query);
  return blogPost[0];
}

export async function getPortfolio(): Promise<[]> {
  const query = `*[_type == "portfolio"] | order(publishedAt desc) {
    title,
    slug,
    body,
    mainImage,
    publishedAt,
  }[0...2]`;
  const projects = await sanityClient.fetch(query);
  projects.forEach((project: Project) => {
    project.publishedAt = formatDate(project.publishedAt);
  });
  return projects;
}
