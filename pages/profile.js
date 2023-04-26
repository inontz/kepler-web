import { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
Profile.title = "Profile";

export default function Profile() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function liffGetPro() {
      const liff = (await import("@line/liff")).default;
      await liff.ready;
      try {
        const profile = await liff.getProfile();
        setProfile(profile);
      } catch (err) {
        console.error("liff get error", err.message);
      }
    }
    liffGetPro();
  }, [profile.userId]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <div className="static place-items-center before:absolute before:h-96 before:w-96 before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        {/* <Image
          className="sticky inset-0"
          src="/logo-no-background.svg"
          alt="Kepler Logo"
          width={500}
          height={500}
          priority
        /> */}
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:text-left">
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {profile.displayName} | {profile.statusMessage} | {profile.userId}
        </button>
      </div>
    </main>
  );
}
