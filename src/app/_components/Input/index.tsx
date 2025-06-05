
interface Params {
    onChange: (e: any) => void;
    inputValue: string | undefined;
    name: string;
}

export default function Input({ onChange, inputValue, name }: Params) { 
    return <input onChange={onChange} value={inputValue} name={name} type="number" min={-10000} max={10000} required />
}