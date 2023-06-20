import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { sections } from '@/constants/sections';
import { useScrollPosition } from '@/utils/useScrollPosition';

import { ButtonDefault } from './Button/Button';
import { CompanyLogo } from './CompanyLogo';
import { NavItem } from './NavItem';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const [show, setShow] = useState(scrollPosition < 64);

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
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  className="relative flex flex-1 items-center justify-center sm:items-stretch sm:justify-between"
                >
                  <div className="flex shrink-0">
                    <NavItem to="/" offset={-65}>
                      <CompanyLogo />
                    </NavItem>
                  </div>
                  <div
                    className={clsx(
                      'absolute inset-y-0 right-0 hidden justify-center space-x-6 sm:flex sm:items-center',
                      show ? 'translate-x-0' : 'translate-x-[150%]',
                      'transition-transform duration-700 ease-out'
                    )}
                  >
                    {sections.map((section) => {
                      return section.id !== '/' ? (
                        <NavItem to={section.id} key={section.id}>
                          {section.title}
                        </NavItem>
                      ) : null;
                    })}
                    <ButtonDefault label="Get Quote" />
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE MENU // todo */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={clsx(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
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
