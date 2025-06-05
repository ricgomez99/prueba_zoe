interface Params {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string | number;
  name: string;
  maxLength?: number;
  type: string;
  placeholder: string;
}

export default function Input({
  onChange,
  inputValue,
  name,
  maxLength,
  type,
  placeholder,
}: Params) {
  return (
    <input
      onChange={onChange}
      value={inputValue}
      name={name}
      type={type}
      maxLength={maxLength}
      placeholder={placeholder}
      required
    />
  );
}
