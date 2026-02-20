'use client';

import React from 'react'; // السطر الأهم لمنع الخطأ الحالي
import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'vff8rfuj', // رقم مشروعك
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
  return React.createElement(NextStudio, { config: config }); // طريقة أكثر أماناً مع react
}
