import LandingPage from "./landingPage/page";
import styles from "./layout.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <LandingPage />
      </main>
    </div>
  );
}
