import clsx from 'clsx';

import { sections } from '@/constants/sections';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

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
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={clsx('h-screen text-white', section.bgColor)}
        >
          <p>{section.title}</p>
          <p>ezt itt egy ékezetes betű teszt a custom fonthoz: áÁöŐúÚüÜűŰ</p>
        </section>
      ))}
    </Main>
  );
};

export default Index;
