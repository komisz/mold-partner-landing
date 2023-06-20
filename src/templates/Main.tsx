import { type ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { sections } from '@/constants/sections';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="w-full bg-white antialiased">
      {props.meta}
      <Navbar items={sections} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export { Main };
