import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Profile() {
  const [os, setOS] = useState({});
  const [profile, setProfile] = useState({});
  const [Error, setError] = useState<string | null>(null);

  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        console.log("LIFF GetProfile");
        liff
          .ready
          .then(() => {
            liff.getOS()
            setOS(os.toString);
            debugger
          })
          .catch((error: Error) => {
            console.log("LIFF init failed.");
            setError(error.toString());
          });
      });
  },);

  return (
    <section>
      <Head>
        <title>My Profile</title>
      </Head>
      <h1>Profile</h1>
      <div>
        {profile.pictureUrl && (
          <Image
            src={profile.pictureUrl}
            alt={profile.displayName}
            width={500}
            height={500}
          />
        )}
        <div>OS: { os.os } </div>
        <div>Name: {profile.displayName}</div>
      </div>
    </section>
  );
}
