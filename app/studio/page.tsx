'use client';
import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'vff8rfuj', // رقم مشروعكِ الصحيح
  dataset: 'production',
  title: 'Elite Admin Studio',
  basePath: '/studio', // المسار المخصص للوحة التحكم
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: 'product',
        title: 'المنتجات',
        type: 'document',
        fields: [
          { name: 'name', title: 'اسم الفستان', type: 'string' },
          { name: 'image', title: 'صورة الفستان', type: 'image' },
          { name: 'price', title: 'السعر', type: 'number' },
        ],
      },
    ],
  },
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}
