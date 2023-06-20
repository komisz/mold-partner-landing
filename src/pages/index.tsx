import clsx from 'clsx';
import Link from 'next/link';

import { products } from '@/constants/products';
import { sections } from '@/constants/sections';
import { services } from '@/constants/services';
import { Meta } from '@/layouts/Meta';
import { Hero } from '@/sections/Hero';
import { Main } from '@/templates/Main';

const randomBgColor = (index: number) => {
  let color = 'bg-green-200';
  if (index === 1) {
    color = 'bg-red-200';
  } else if (index === 2) {
    color = 'bg-yellow-200';
  } else if (index === 3) {
    color = 'bg-blue-200';
  }
  return color;
};

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Mold Partner Kft."
          description="Home of Mold Partner Kft.'s landing page"
        />
      }
    >
      <Hero id="/" />
      {sections.map((s) => {
        if (s.id === 'services') {
          return (
            <section
              id={s.id}
              className="h-screen overflow-y-hidden pt-16"
              key={s.id}
            >
              <div>
                <h2>{s.title}</h2>
              </div>
              <div className="grid min-h-full grid-cols-4">
                {services.map((p, idx) => {
                  return (
                    <div
                      className={clsx(
                        'flex items-center justify-center font-body text-xl font-light uppercase',
                        randomBgColor(idx)
                      )}
                      key={p.id}
                    >
                      <Link href={`/services/#${p.id}`}>{p.title}</Link>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        }
        if (s.id === 'products') {
          return (
            <section id={s.id} className="h-screen pt-16" key={s.id}>
              <div>
                <h2>{s.title}</h2>
              </div>
              <div className="flex h-full flex-wrap">
                {products.map((p, idx) => {
                  return (
                    <div
                      className={clsx(
                        'flex basis-1/2 items-center justify-center',
                        randomBgColor(idx)
                      )}
                      key={p.id}
                    >
                      <Link href={`/product/${p.id}`}>{p.title}</Link>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        }
        return (
          <section id={s.id} className="h-screen pt-16" key={s.id}>
            <h2>{s.title}</h2>
          </section>
        );
      })}
    </Main>
  );
};

export default Index;
