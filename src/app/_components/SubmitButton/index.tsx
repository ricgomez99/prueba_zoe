import styles from "./submitButton.module.css";

interface Params {
  buttonText: string;
  buttonSrc?: string;
  altText?: string;
}

export default function SubmitButton({
  buttonText,
  altText,
  buttonSrc,
}: Params) {
  return (
    <button className={styles.submit_button} type="submit">
      {buttonText}
      {buttonSrc && (
        <img src={buttonSrc} alt={altText} className={styles.botton_icon} />
      )}
    </button>
  );
}
