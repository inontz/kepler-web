import { useEffect } from "react";
import "@/styles/globals.css";

const liffId = process.env.NEXT_PUBLIC_LIFF_ID;

export default function App({ Component, pageProps }) {
  const [profile, setProfile] = useState({});
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

      await liff.ready;
      const profile = await liff.getProfile();
      setProfile(profile);
      debugger;
    }
    liffLogin();
  }, [profile.userId]);
  return <Component {...pageProps} />;
}
