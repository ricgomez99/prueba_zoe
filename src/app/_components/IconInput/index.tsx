import styles from "./iconInput.module.css";

interface Params {
  children: React.ReactNode;
  labelName?: string;
  inconSrc?: string;
  iconAlt?: string;
}

export default function IconInput({
  children,
  iconAlt,
  inconSrc,
  labelName,
}: Params) {
  return (
    <div className={styles.inputs_wrapper}>
      {labelName && <label className={styles.input_label}>{labelName}</label>}
      <div className={styles.inputs_field}>
        {inconSrc && (
          <img src={inconSrc} alt={iconAlt} className={styles.input_icon} />
        )}
        {children}
      </div>
    </div>
  );
}
