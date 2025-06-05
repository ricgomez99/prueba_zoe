import { useState } from "react";

export default function useInputChange<T>(initValues: T) {
  const [inputValue, setInputValue] = useState(initValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const resetState = () => {
    setInputValue(initValues);
  };

  const inputData = {
    values: inputValue,
    onChange: handleChange,
    reset: resetState,
  };

  return inputData;
}
