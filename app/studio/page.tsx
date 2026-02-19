'use client';
import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'xtffcjyf', // رقم مشروعكِ من الصورة
  dataset: 'production',
  title: 'Elite Studio',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: { types: [] },
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}
