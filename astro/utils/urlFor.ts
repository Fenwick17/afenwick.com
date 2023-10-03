import imageUrlBuilder from '@sanity/image-url';
import { useSanityClient } from 'astro-sanity';

import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { Image } from '@types';

const builder = imageUrlBuilder(useSanityClient());

const urlFor = (source: Image): ImageUrlBuilder => {
  return builder.image(source);
};

export default urlFor;
