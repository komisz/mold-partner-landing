import { sections } from '@/constants/sections';
import { Meta } from '@/layouts/Meta';
import { Hero } from '@/sections/Hero';
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
      <Hero id="/" />
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="h-screen">
          <p>{section.title}</p>
        </section>
      ))}
    </Main>
  );
};

export default Index;
