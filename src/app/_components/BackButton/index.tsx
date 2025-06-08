import styles from "./BackButton.module.css";

interface Params {
  onClick: () => void;
  buttonText: string;
}

export default function BackButton({ buttonText, onClick }: Params) {
  return (
    <button type="button" onClick={onClick} className={styles.back_button}>
      {buttonText}
    </button>
  );
}
