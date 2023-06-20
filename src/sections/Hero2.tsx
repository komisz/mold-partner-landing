import type { FC } from 'react';
import React from 'react';

import { Button2 } from '@/components/Button/Button';
import { Carousel } from '@/components/Carousel';

type SectionProps = {
  id: string;
};

export const Hero2: FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="-mt-[65px] flex h-screen">
      {/* BAR */}
      <div className=" w-1/12 " />

      {/* LEFT */}
      <div className="h-[90%] w-4/12 pt-16">
        <div className="flex h-full flex-col justify-center space-y-6 pr-12">
          <div className="flex w-3/4 items-center rounded-2xl bg-gray-200 p-1">
            <div className="mr-3 flex items-center justify-center rounded-xl bg-red-200 px-3 py-[2px] font-light text-white">
              <span>news</span>
            </div>
            <p className="font-body font-extralight">
              Our online store will open soon...
            </p>
          </div>

          <h1 className="font-title text-5xl font-extrabold leading-relaxed">
            Your freakin cool molding supplier
          </h1>
          <h2 className="font-title text-2xl font-light">
            Lorem, ipsum dolor.
          </h2>
          <p className="font-title text-2xl font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            dolores itaque alias aspernatur aliquam nesciunt! Eligendi magnam
            quo dolore fuga?
          </p>
          <div className="pt-4">
            <Button2 label="Get to know us" />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="relative h-[90%] w-3/5">
        <Carousel />
      </div>
    </section>
  );
};
