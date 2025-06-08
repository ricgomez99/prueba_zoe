import styles from "./DeleteButton.module.css";

interface Params {
  iconSrc: string;
  iconAlt: string;
  onClick: () => void;
  buttonText: string;
}

export default function DeleteButton({
  buttonText,
  iconAlt,
  iconSrc,
  onClick,
}: Params) {
  return (
    <button onClick={onClick} className={styles.delete_button}>
      {iconSrc && (
        <img
          src={iconSrc}
          alt={iconAlt}
          className={styles.delete_button_icon}
        />
      )}

      {buttonText}
    </button>
  );
}
