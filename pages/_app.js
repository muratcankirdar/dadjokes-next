import '../styles/globals.css'
import axios from 'axios';
import Navbar from '../components/Navbar';

axios.defaults.headers.common['Accept'] = 'application/json';
import Head from 'next/head'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Dad Jokes</title>
        <meta name="description" content="A place with full of dad jokes"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </>
  );
}

export default MyApp
