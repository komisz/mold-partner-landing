import type { FC } from 'react';

import { Hero } from '@/sections/Hero';

export type SectionProps = {
  id: string;
  title: string;
  component: FC<SectionProps>;
};

export const sections: SectionProps[] = [
  {
    id: 'news',
    title: 'News',
    component: Hero,
  },
  {
    id: 'products',
    title: 'Products',
    component: Hero,
  },
  {
    id: 'about',
    title: 'About us',
    component: Hero,
  },
  {
    id: 'contact',
    title: 'Contact',
    component: Hero,
  },
];
