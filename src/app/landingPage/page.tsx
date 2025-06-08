import BudgetForm from "../_components/BudgetForm";
import styles from "./landing.module.css";

export default function LandingPage() {
  const formTitle = "Find Your Company Advisors!";
  const formSubtitle = "Search by income to find your advisors.";

  return (
    <section className={styles.landing_container}>
      <BudgetForm formTitle={formTitle} formSubtitle={formSubtitle} />
    </section>
  );
}
