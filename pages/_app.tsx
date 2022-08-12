import 'nextra-theme-blog/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/main.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/blog/feed.xml"
        />
        <link
          rel="preload"
          href="/blog/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
