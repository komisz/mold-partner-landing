import clsx from 'clsx';
import React from 'react';
import type { LinkProps } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

export const NavItem = (props: LinkProps & { title: string }) => {
  return (
    // todo: TS issue with ref from unknown reason
    // @ts-ignore
    <ScrollLink
      className={clsx('cursor-pointer pb-2 font-extralight uppercase')}
      activeClass="border-b-2 border-pink-400 text-pink-400"
      spy
      smooth
      offset={props.offset || -64}
      duration={500}
      href={`#${props.href}`}
      {...props}
    >
      {props.title}
    </ScrollLink>
  );
};
