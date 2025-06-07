import styles from "./CloseButton.module.css";

interface Params {
  onClose: () => void;
}

export default function CloseButton({ onClose }: Params) {
  return (
    <button onClick={onClose} className={styles.close_button}>
      Cerrar
    </button>
  );
}
