"use client";

import Input from "../Input";
import { useRouter } from "next/navigation";
import useInputChange from "@/app/hooks/useInputChange";
import styles from "./budget.module.css";
import SubmitButton from "../SubmitButton";
import IconInput from "../IconInput";
interface Params {
  formTitle: string;
  formSubtitle: string;
}

export default function BudgetForm({ formTitle, formSubtitle }: Params) {
  const inputValues = {
    income: "",
  };
  const submitButtonValues = {
    src: "./glass.svg",
    alt: "magnifying glass icon",
  };
  const { onChange, values } = useInputChange(inputValues);
  const router = useRouter();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/advisors?income_value=${values.income}`);
  };

  return (
    <article className={styles.form_container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img src="./zoe-logo.svg" />
        <div className={styles.form_header}>
          <div className={styles.form_image_container}>
            <img
              src="./image-portrait.svg"
              alt="profile image"
              className={styles.form_image}
            />
          </div>
          <h1 className={styles.form_title}>{formTitle}</h1>
          <span className={styles.form_subtitle}>{formSubtitle}</span>
        </div>
        <IconInput
          iconAlt="dollar sign"
          inconSrc="./dollar.svg"
          labelName="Current income">
          <Input
            name="income"
            inputValue={values.income}
            onChange={onChange}
            maxLength={5}
            type="text"
            className={styles.form_input}
          />
        </IconInput>
        <SubmitButton
          buttonText="Search Now"
          altText={submitButtonValues.alt}
          buttonSrc={submitButtonValues.src}
        />
      </form>
    </article>
  );
}
