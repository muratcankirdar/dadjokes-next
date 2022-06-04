import axios from 'axios';
import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

axios.defaults.headers.common['Accept'] = 'application/json';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Dad Jokes</title>
        <meta name="description" content="A place with full of dad jokes"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
