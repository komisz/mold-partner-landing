import { type ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="w-full antialiased">
      {props.meta}

      <div className="mx-auto max-w-screen-xl">
        <header className="sticky top-0 bg-white">
          <Navbar />
        </header>

        <main className="text-xl">{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center font-body text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title} Kft., Made by{' '}
          <a href="https://github.com/komisz" className="text-blue-600">
            komisz
          </a>{' '}
          with <span className="grayscale">❤️</span>.
        </footer>
      </div>
    </div>
  );
};

export { Main };
