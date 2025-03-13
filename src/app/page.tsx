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
            <h1>First Lesson to success</h1>
            <br />
            <p>
              Let's go together until the success my friend the lesson teaches
              you what's the power of a good approach.
              <br />
              <br />
              <b>Lucas Wunder - Mentor & Especialista Tech</b>
            </p>
          </div>

          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/hAygxfX4CWc?si=ie4N0cRjVSspN5oI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay;picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </main>
      </div>
      <footer className={styles.footer}>MIT - LICENSE</footer>
    </>
  );
}
