import { useEffect, useState } from "react";
import "@/styles/globals.css";
import Head from "next/head";

const liffId = process.env.NEXT_PUBLIC_LIFF_ID;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    async function liffLogin() {
      const liff = (await import("@line/liff")).default;
      try {
        await liff.init({ liffId });
      } catch (err) {
        console.error("liff init error", err.message);
      }
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    }
    liffLogin();
  }, []);
  return (
    <div>
      <Head>
        <title>{Component.title} | Kepler 🚀</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
    // <>
    //   <Head>
    //     <title</title>
    //   </Head>
    //   <Component {...pageProps} />
    // </>
  );
}
