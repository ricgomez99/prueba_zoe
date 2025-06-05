"use client";

import Input from "../Input";
import { useRouter } from "next/navigation";
import useInputChange from "@/app/hooks/useInputChange";
interface Params {
  formTitle: string;
}

export default function BudgetForm({ formTitle }: Params) {
  const inputValues = {
    income: "",
  };
  const { onChange, values } = useInputChange(inputValues);
  const router = useRouter();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/advisors?income_value=${values.income}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>{formTitle}</div>
      <div>
        <Input
          name="income"
          inputValue={values.income}
          onChange={onChange}
          maxLength={5}
          type="text"
          placeholder="Income"
        />
      </div>
      <button type="submit">Search now</button>
    </form>
  );
}
