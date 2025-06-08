import Input from "../Input";
import useInputChange from "@/app/hooks/useInputChange";
import { UpdateAdvisor } from "@/app/types";
import useAdvisorsContext from "@/app/hooks/useAdvisorsContext";
import useUpdateAdvisor from "@/app/hooks/useUpdateAdvisor";
import { useRouter } from "next/navigation";
import IconInput from "../IconInput";
import styles from "./EditForm.module.css";
import SubmitButton from "../SubmitButton";
import BackButton from "../BackButton";

interface Params {
  id: string;
  refetch: () => void;
}

export default function EditForm({ id, refetch }: Params) {
  const { getAdvisorById } = useAdvisorsContext();
  const advisor = getAdvisorById(id);
  const { update } = useUpdateAdvisor<UpdateAdvisor>();
  const router = useRouter();

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
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.edit_form}>
      <div className={styles.edit_form_input_area}>
        <IconInput labelName="Name">
          <Input
            inputValue={values.name}
            onChange={onChange}
            placeholder={inputValues.name}
            name="name"
            type="text"
            className={styles.edit_form_input}
          />
        </IconInput>
      </div>
      <div className={styles.edit_form_input_area}>
        <IconInput labelName="E-mail">
          <Input
            inputValue={values.email}
            onChange={onChange}
            placeholder={inputValues.email}
            name="email"
            type="text"
            className={styles.edit_form_input}
          />
        </IconInput>
        <IconInput labelName="Phone">
          <Input
            inputValue={values.phone}
            onChange={onChange}
            placeholder={inputValues.phone}
            name="phone"
            type="text"
            className={styles.edit_form_input}
          />
        </IconInput>
      </div>
      <div className={styles.edit_form_input_area}>
        <IconInput labelName="Address">
          <Input
            inputValue={values.address}
            onChange={onChange}
            placeholder={inputValues.address}
            name="address"
            type="text"
            className={styles.edit_form_input}
          />
        </IconInput>
        <IconInput labelName="Income">
          <Input
            inputValue={values.income}
            onChange={onChange}
            placeholder={`${inputValues.income}`}
            name="income"
            type="text"
            className={styles.edit_form_input}
          />
        </IconInput>
      </div>
      <div className={styles.edit_form_action_buttons}>
        <BackButton buttonText="Go Back" onClick={handleGoBack} />
        <SubmitButton buttonText="Save Changes" />
      </div>
    </form>
  );
}
