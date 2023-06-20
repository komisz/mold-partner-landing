import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { products } from '@/constants/products';
import { Meta } from '@/layouts/Meta';
import { ServiceLayout } from '@/templates/ServiceLayout';

type IProductUrl = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<IProductUrl> = async () => {
  return {
    paths: products.map((p, _index) => ({
      params: { slug: p.id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IProductUrl, IProductUrl> = async ({
  params,
}) => {
  return {
    props: {
      slug: params!.slug,
    },
  };
};

const Product = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ServiceLayout
      items={[]}
      meta={<Meta title={props.slug} description="Lorem ipsum" />}
    >
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="font-title text-4xl font-medium">
          Product #{props.slug}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos
          earum doloribus, quibusdam magni accusamus vitae! Nisi, sunt! Aliquam
          iste expedita cupiditate a quidem culpa eligendi, aperiam saepe
          dolores ipsum!
        </p>
      </div>
    </ServiceLayout>
  );
};

export default Product;
