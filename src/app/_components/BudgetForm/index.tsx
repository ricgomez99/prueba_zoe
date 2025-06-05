'use client'

import { useState } from "react";
import Input from "../Input";
import { redirect } from "next/navigation";


interface Params {
    formTitle: string;
}

export default function BudgetForm({ formTitle }: Params) {

    const [value, setValue] = useState()

    const handleChange = (e: any) => {
        const { value } = e.target;
        setValue(value)
    }

    const handleClick = () => {
        redirect(`/advisors?value=${value}`)
    }

    return <form>
            <div>{ formTitle }</div>
            <div>
                <Input name="budget" inputValue={value} onChange={handleChange} />
            </div>
            <button onClick={handleClick}>Search now</button>
        </form>
}