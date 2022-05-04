import { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyles } from 'styles/globals'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - BoilerPlate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Mukta:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled-components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
