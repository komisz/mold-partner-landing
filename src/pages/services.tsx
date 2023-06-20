import { services } from '@/constants/services';
import { Meta } from '@/layouts/Meta';
import { ServiceLayout } from '@/templates/ServiceLayout';

const Services = () => {
  return (
    <ServiceLayout
      items={services}
      meta={<Meta title="services" description="Lorem ipsum" />}
    >
      {services.map((s) => {
        return (
          <section
            id={s.id}
            className="flex h-screen items-center justify-center"
            key={s.id}
          >
            {s.title}
          </section>
        );
      })}
    </ServiceLayout>
  );
};

export default Services;
