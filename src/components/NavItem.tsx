import clsx from 'clsx';
import React, { useState } from 'react';
import type { LinkProps } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

export const NavItem = (props: LinkProps) => {
  const [isActive, setActive] = useState(false);
  const isLogo = typeof props.children !== 'string';

  return (
    // todo: TS issue with ref from unknown reason
    // @ts-ignore
    <ScrollLink
      offset={-64}
      duration={500}
      href={`#${props.to}`}
      onSetActive={() => setActive(true)}
      onSetInactive={() => setActive(false)}
      aria-current={isActive ? 'page' : undefined}
      spy
      smooth
      className={clsx(
        !isLogo &&
          'border-b py-2 text-base font-medium uppercase tracking-wider text-black backface-hidden',
        'origin-center transition-transform duration-300'
      )}
      activeClass="active"
      {...props}
    >
      {props.children}
    </ScrollLink>
  );
};
