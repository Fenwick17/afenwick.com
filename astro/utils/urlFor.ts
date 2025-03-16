import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { Image } from '@types';

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source: Image): ImageUrlBuilder => {
  return builder.image(source);
};

export default urlFor;
