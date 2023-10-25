import { defineCliConfig } from 'sanity/cli';
import 'dotenv/config';

console.log(process.env);

export default defineCliConfig({
  api: {
    projectId: '3mk20h23',
    dataset: 'production',
  },
});
