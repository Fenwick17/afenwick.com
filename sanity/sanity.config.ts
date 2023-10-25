import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { codeInput } from '@sanity/code-input';

export default defineConfig({
  name: 'default',
  title: 'afenwick-blog',
  projectId: '3mk20h23',
  dataset: 'production',
  plugins: [deskTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
});
