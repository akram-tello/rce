import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import '../styles/global.css';
import '../styles/reset.css';

// import 'antd/dist/antd.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RCE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}