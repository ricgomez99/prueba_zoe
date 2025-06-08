import { Advisor } from "@/app/types";
import styles from "./itemsList.module.css";

interface Params {
  data: Advisor[];
  onClick: (id: string) => void;
}

export default function ItmesList({ data, onClick }: Params) {
  return (
    <div className={styles.items_wrapper}>
      <div className={styles.items_data}>
        <div className={styles.items_data_title}>Advisor Name</div>
        <ul className={styles.items_data_list}>
          {data &&
            data.map((advisor: Advisor) => (
              <div key={advisor.id}>
                <span
                  className={styles.item_name}
                  onClick={() => onClick(advisor.id)}>
                  {advisor.name}
                </span>
              </div>
            ))}
        </ul>
      </div>
      <div className={styles.items_data}>
        <div className={styles.items_data_title}>Income</div>
        <ul className={styles.items_data_list}>
          {data &&
            data.map((advisor: Advisor) => (
              <div key={advisor.id}>
                <span>${advisor.income}</span>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
