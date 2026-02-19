'use client';

import React from 'react';
import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'xtffcjyf', // رقم مشروعكِ كما في الصورة
  dataset: 'production',
  title: 'Elite Studio',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: 'product',
        title: 'المنتجات',
        type: 'document',
        fields: [
          { name: 'name', title: 'الاسم', type: 'string' },
          { name: 'image', title: 'الصورة', type: 'image' },
          { name: 'basePrice', title: 'السعر', type: 'number' },
        ],
      },
    ],
  },
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}
