import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PodCodar labs</title>
        <meta name="description" content="PodCodar tech lab" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>

      <Component {...pageProps} />
    </>

  )
}

export default MyApp
