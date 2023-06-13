import { type ReactNode } from 'react';

import { NavItem } from '@/components/NavItem';
import { sections } from '@/constants/sections';
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
          <nav>
            <ul className="flex h-16 flex-wrap items-center space-x-6 text-xl">
              {sections.map((section) => (
                <li key={section.id}>
                  <NavItem title={section.title} to={section.id} />
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="text-xl">{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center font-body text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title} Kft., Made by{' '}
          <a href="https://github.com/komisz" className="text-blue-600">
            komisz
          </a>{' '}
          with ❤️.
        </footer>
      </div>
    </div>
  );
};

export { Main };
