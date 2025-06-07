import styles from "./submitButton.module.css";

interface Params {
  buttonText: string;
}

export default function SubmitButton({ buttonText }: Params) {
  return (
    <button className={styles.submit_button} type="submit">
      {buttonText}
    </button>
  );
}
