/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Liff } from "@line/liff/exports";

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError
}) => {
  return (
    <div>
      <Head>
        <title>Kepler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/kepler-website-favicon-color.png" />
      </Head>

      <main className={styles.main}>
        <div className="flex justify-center ...">
          <img className="object-contain object-center h-96 w-96" src="/logo-no-background.svg" alt="Kepler" />
        </div>
        {liff && <p>LIFF init succeeded.</p>}
        {liffError && (
          <>
            <p>LIFF init failed.</p>
            <p>
              <code>{liffError}</code>
            </p>
          </>
        )}
{/*   
        <h1 className="text-3xl font-bold underline"> Hello world! </h1>
        {liff && <p>LIFF init succeeded.</p>}
        {liffError && (
          <>
            <p>LIFF init failed.</p>
            <p>
              <code>{liffError}</code>
            </p>
          </>
        )}
        <a
          href="/profile"
        >
          Click To See My Profile
        </a> */}
        
        {/* <a
          href="https://developers.line.biz/ja/docs/liff/"
          target="_blank"
          rel="noreferrer"
        >
          LIFF Documentation
        </a> */}
      </main>
       {/* <picture>
            <img className="object-none object-cente w-24 h-24" src="/logo-no-background.svg" alt="Kepler"></img>
        </picture> */}
    </div>
  );
};

export default Home;
