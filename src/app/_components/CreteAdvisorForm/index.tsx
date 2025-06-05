"use client";

import { CreateAdvisor } from "@/app/types";
import useInputChange from "@/app/hooks/useInputChange";
import Input from "../Input";
import useCreateAdvisor from "@/app/hooks/useCreateAdvisor";

interface Params {
  onAdvisorCreated: () => void;
}

export default function CreateAdvisorForm({ onAdvisorCreated }: Params) {
  const inputValues: CreateAdvisor = {
    name: "",
    avatar: "",
    email: "",
    phone: "",
    address: "",
    income: Number(0),
  };

  const { create } = useCreateAdvisor<CreateAdvisor>();
  const { onChange, values, reset } =
    useInputChange<CreateAdvisor>(inputValues);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = { ...values, income: Number(values.income) };
    try {
      await create(payload);
      reset();
      onAdvisorCreated();
    } catch (error) {
      console.log(error as Error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputValue={values.name}
        maxLength={30}
        name="name"
        onChange={onChange}
        type="text"
        placeholder="Nombre"
      />
      <Input
        inputValue={values.avatar}
        maxLength={30}
        name="avatar"
        onChange={onChange}
        type="text"
        placeholder="Avatar"
      />
      <Input
        inputValue={values.email}
        maxLength={50}
        name="email"
        onChange={onChange}
        type="text"
        placeholder="E-mail"
      />
      <Input
        inputValue={values.phone}
        maxLength={13}
        name="phone"
        onChange={onChange}
        type="text"
        placeholder="Telefono"
      />
      <Input
        inputValue={values.address}
        maxLength={50}
        name="address"
        onChange={onChange}
        type="text"
        placeholder="Direccion"
      />
      <Input
        inputValue={values.income}
        maxLength={5}
        name="income"
        onChange={onChange}
        type="text"
        placeholder="Income"
      />
      <button type="submit">Create Advisor</button>
    </form>
  );
}
