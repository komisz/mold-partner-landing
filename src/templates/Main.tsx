import { type ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="w-full bg-white antialiased">
      {props.meta}
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export { Main };
