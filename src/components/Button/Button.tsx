import React from 'react';
import { Link } from 'react-scroll';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      className="group relative flex items-center py-2 pl-1 pr-4 font-title font-medium uppercase transition-colors duration-300 hover:text-white"
    >
      <div className="absolute inset-y-0 -left-1 -z-10 flex h-full w-2/5 items-center bg-accent from-[#0e700e] to-[#00AA00] shadow-2xl transition-width duration-500 group-hover:w-full group-hover:rounded-tr-lg group-hover:bg-gradient-to-tr" />
      <span className="mr-2 inline-block h-[2px] w-3 bg-black transition-all duration-300 group-hover:animate-hyphen group-hover:bg-white" />
      {props.label}
    </button>
  );
};

export const ButtonDefault = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className="rounded-md border border-accent bg-transparent px-3.5 py-1.5 text-sm font-semibold uppercase text-accent shadow-sm hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {props.label}
    </button>
  );
};

export const Button2 = (props: ButtonProps) => (
  <Link
    to="about"
    offset={-64}
    duration={500}
    href="#about"
    spy
    smooth
    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-2 font-title uppercase text-black transition-colors duration-500 hover:text-white"
  >
    <span className="absolute h-0 w-0 rounded-full bg-accent transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56" />
    <span className="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-400 opacity-30" />
    <span className="relative">{props.label}</span>
  </Link>
);
