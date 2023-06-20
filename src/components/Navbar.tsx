import { Disclosure } from '@headlessui/react';
import {
  ArrowLeftIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import type { NavbarItemProps } from '@/constants/sections';
import { useScrollPosition } from '@/utils/useScrollPosition';

import { ButtonDefault, ButtonDownload } from './Button/Button';
import { CompanyLogo } from './CompanyLogo';
import { NavItem } from './NavItem';

export default function Navbar({ items }: { items: NavbarItemProps[] }) {
  const scrollPosition = useScrollPosition();
  const [show, setShow] = useState(scrollPosition < 64);

  const route = useRouter();

  useEffect(() => {
    if (scrollPosition < 64) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [scrollPosition]);

  return (
    <header className="sticky top-0 z-10 ">
      <Disclosure
        as="nav"
        className={clsx(
          'overflow-hidden',
          'transition-colors duration-200 ease-in',
          'drop-shadow-md',
          show ? 'bg-white' : 'bg-transparent'
        )}
      >
        {({ open }) => (
          <>
            <div
              className={clsx(
                'mx-auto max-w-7xl px-2 sm:px-6 lg:px-8',
                'transition-colors duration-500 ease-in'
              )}
            >
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="z-20 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div
                  id="nav-item-wrapper"
                  className="relative flex flex-1 items-center justify-center lg:items-stretch lg:justify-between"
                >
                  {route.pathname === '/' ? (
                    <div className="flex shrink-0 items-center justify-center">
                      <NavItem to="/" offset={-65}>
                        <CompanyLogo />
                      </NavItem>
                    </div>
                  ) : (
                    <Link
                      href="/"
                      className={clsx(
                        'flex shrink-0 items-center justify-center',
                        'origin-center transition-transform duration-300'
                      )}
                    >
                      <ArrowLeftIcon className="mr-6 block h-6 w-6" />
                      <CompanyLogo />
                    </Link>
                  )}
                  {items.length ? (
                    <div
                      className={clsx(
                        'absolute inset-y-0 right-0 hidden justify-center space-x-6 lg:flex lg:items-center',
                        show ? 'translate-x-0' : 'translate-x-[150%]',
                        'transition-transform duration-700 ease-out'
                      )}
                    >
                      {items.map((section) => {
                        return section.id !== '/' ? (
                          <NavItem to={section.id} key={section.id}>
                            {section.title}
                          </NavItem>
                        ) : null;
                      })}
                      <ButtonDefault label="Get Quote" />
                    </div>
                  ) : (
                    <div className="absolute right-0 flex space-x-4">
                      <ButtonDownload label=".pdf catalogue" />
                      <ButtonDownload label="folder lib" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* MOBILE MENU // todo */}
            <Disclosure.Panel
              className="lg:hidden"
              id="nav-item-wrapper-mobile"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                {items.map((item) => (
                  <Disclosure.Button
                    key={item.id}
                    as="button"
                    // href={`#${item.id}`}
                    className={clsx(
                      // item.current
                      //   ? 'bg-gray-900 text-white'
                      // :
                      'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    // aria-current={item.current ? 'page' : undefined}
                  >
                    {item.title}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
