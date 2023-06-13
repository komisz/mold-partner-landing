import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Inter, Source_Sans_Pro } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: '300',
  preload: true,
});
const source = Source_Sans_Pro({
  subsets: ['latin'],
  variable: '--font-source',
  weight: ['200', '400', '600', '900'],
  preload: true,
});

// const roboto = Roboto({
//   subsets: ['latin'],
//   variable: '--font-roboto-mono',
//   weight: ['100', '400', '700', '900'],
// });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={`${inter.variable} ${source.variable}`}>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
