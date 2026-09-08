import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

import type { Image } from '@types';

const builder = createImageUrlBuilder(sanityClient);

const urlFor = (source: Image) => {
  return builder.image(source);
};

export default urlFor;
