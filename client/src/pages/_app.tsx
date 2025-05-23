import type { AppProps } from 'next/app';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Head from 'next/head';
import '@/styles/index.css';
import UserProvider from '@/providers/UserProvider';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mobile BG</title>
        <meta name="description" content="Mobile BG is your destination for discovering and buying cars you truly love." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UserProvider>
        <Navigation />
        <main style={{ padding: '1rem' }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </UserProvider>
    </>
  );
}

export default MyApp;