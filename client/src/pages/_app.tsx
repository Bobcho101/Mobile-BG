import type { AppProps } from 'next/app';
import Navigation from '@/components/Navigation';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <main style={{ padding: '1rem' }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;