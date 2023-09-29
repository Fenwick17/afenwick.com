import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { codeInput } from '@sanity/code-input';

export default defineConfig({
  name: 'default',
  title: 'afenwick-blog',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  plugins: [deskTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
});
