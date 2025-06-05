import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Hello world!
        <Link href={"/landingPage"}>Go to Landing page</Link>
        <Link href={"/advisors"}>Advisors</Link>
        </main>
    </div>
  );
}
