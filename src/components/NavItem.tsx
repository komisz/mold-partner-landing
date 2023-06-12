import clsx from 'clsx';
import React from 'react';
import type { LinkProps } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

export const NavItem = (props: LinkProps & { title: string }) => {
  return (
    // todo: TS issue with ref from unknown reason
    // @ts-ignore
    <ScrollLink
      className={clsx('pb-2 uppercase')}
      activeClass="border-b border-pink-400 text-pink-400"
      spy
      smooth
      offset={props.offset || -64}
      duration={500}
      {...props}
    >
      {props.title}
    </ScrollLink>
  );
};
