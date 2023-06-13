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
        <section key={section.id} id={section.id}>
          <p>{section.title}</p>
        </section>
      ))}
    </Main>
  );
};

export default Index;
