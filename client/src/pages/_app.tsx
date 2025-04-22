import type { AppProps } from 'next/app';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <main style={{ padding: '1rem' }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;