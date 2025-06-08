import styles from "./EditButton.module.css";

interface Params {
  onClick: () => void;
  iconSrc?: string;
  iconAlt?: string;
  buttonText: string;
}

export default function EditButton({
  onClick,
  buttonText,
  iconAlt,
  iconSrc,
}: Params) {
  return (
    <button onClick={onClick} className={styles.edit_button}>
      {iconSrc && (
        <img src={iconSrc} alt={iconAlt} className={styles.edit_button_icon} />
      )}
      {buttonText}
    </button>
  );
}
