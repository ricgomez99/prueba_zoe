import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img src="./zoe-logo.svg" alt="zoe logo image" />
    </nav>
  );
}
