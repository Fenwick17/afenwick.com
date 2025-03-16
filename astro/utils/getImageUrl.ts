import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

export function getImageUrl(source, format = 'avif') {
  return builder.image(source).format(format).url();
}

export default getImageUrl;
