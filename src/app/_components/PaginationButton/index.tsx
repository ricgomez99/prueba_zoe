import styles from "./paginationButton.module.css";

interface Params {
  onClick: () => void;
  iconSrc: string;
  iconAlt: string;
  disabled?: boolean;
}

export default function PaginationButton({
  iconAlt,
  iconSrc,
  onClick,
  disabled,
}: Params) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={styles.pagination_button}>
      <img
        src={iconSrc}
        alt={iconAlt}
        className={styles.pagination_button_icon}
      />
    </button>
  );
}
