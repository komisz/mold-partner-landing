import { type ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { NavbarItemProps } from '@/constants/sections';

type IProdProps = {
  meta: ReactNode;
  children: ReactNode;
  items: NavbarItemProps[];
};

const ServiceLayout = (props: IProdProps) => {
  return (
    <div className="w-full bg-white antialiased">
      {props.meta}
      <Navbar items={props.items} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export { ServiceLayout };
