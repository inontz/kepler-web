import { useEffect, useState } from "react";
import "@/styles/globals.css";

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
  return <Component {...pageProps} />;
}
