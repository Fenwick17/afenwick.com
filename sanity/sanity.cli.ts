import { defineCliConfig } from 'sanity/cli';
import 'dotenv/config';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
  },
});
