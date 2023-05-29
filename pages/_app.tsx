import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_ADSENSE}`}
     crossOrigin="anonymous" />
      <Component {...pageProps} />
      <Analytics />
    </>
     
  );
}

export default MyApp;
