import { ReactElement } from "react";
import styles from "./page.module.css";

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>
      </main>
    </div>
  );
}
