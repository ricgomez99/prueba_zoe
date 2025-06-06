import Input from "../Input";
import useInputChange from "@/app/hooks/useInputChange";
import { UpdateAdvisor } from "@/app/types";
import useAdvisorsContext from "@/app/hooks/useAdvisorsContext";
import useUpdateAdvisor from "@/app/hooks/useUpdateAdvisor";

interface Params {
  id: string;
  refetch: () => void;
}

export default function EditForm({ id, refetch }: Params) {
  const { getAdvisorById } = useAdvisorsContext();
  const advisor = getAdvisorById(id);
  const { update } = useUpdateAdvisor<UpdateAdvisor>();

  const inputValues = {
    name: advisor?.name as string,
    avatar: "",
    email: advisor?.email as string,
    phone: advisor?.phone as string,
    address: advisor?.address as string,
    income: advisor?.income as number,
  };

  const { onChange, reset, values } = useInputChange(inputValues);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      ...values,
      avatar: advisor?.avatar,
      income: Number(values.income),
    };

    try {
      await update({ payload, id });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          inputValue={values.name}
          onChange={onChange}
          placeholder={inputValues.name}
          name="name"
          type="text"
        />
        <Input
          inputValue={values.avatar}
          onChange={onChange}
          placeholder={inputValues.avatar}
          name="avatar"
          type="file"
        />
        <Input
          inputValue={values.email}
          onChange={onChange}
          placeholder={inputValues.email}
          name="email"
          type="text"
        />
        <Input
          inputValue={values.phone}
          onChange={onChange}
          placeholder={inputValues.phone}
          name="phone"
          type="text"
        />
        <Input
          inputValue={values.address}
          onChange={onChange}
          placeholder={inputValues.address}
          name="address"
          type="text"
        />
        <Input
          inputValue={values.income}
          onChange={onChange}
          placeholder={`${inputValues.income}`}
          name="income"
          type="text"
        />
      </div>
      <button type="button">Goback</button>
      <button type="submit">Save Changes</button>
    </form>
  );
}
