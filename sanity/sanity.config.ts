import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas';
import { codeInput } from '@sanity/code-input';

export default defineConfig({
  name: 'default',
  title: 'afenwick-blog',
  projectId: '3mk20h23',
  dataset: 'production',
  plugins: [structureTool(), codeInput(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
