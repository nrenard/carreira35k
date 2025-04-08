"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Next.js logo"
          width={200}
          height={80}
          priority
        />
      </header>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.mainContentText}>
            <h1>A Estratégia que os Devs Top 1% Usam</h1>
            <br />
            <p>
              Descubra o método que está transformando devs subvalorizados em
              profissionais disputados e altamente pagos. <br /> Mesmo sem
              inglês fluente.
              <br />
              <br />
              <b>Lucas Wunder - Mentor & Especialista Tech</b>
            </p>
          </div>

          <iframe
            width="800"
            height="450"
            src="https://iframe.mediadelivery.net/embed/407326/97a55931-889a-4098-9e1a-bb5b75a0f131?autoplay=true"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media;allowfullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </main>
      </div>
      <footer className={styles.footer}>MIT - LICENSE</footer>
    </>
  );
}
