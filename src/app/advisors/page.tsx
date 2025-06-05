'use client'
import usefetch from "../hooks/useFetch"
import { useSearchParams } from "next/navigation"

type Advisor = {
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    avatar: string,
    income: number
}

const url = 'http://localhost:3001/advisor'
export default function Advisors() {
    const {data} = usefetch<Advisor[]>(url)
    const searchParams = useSearchParams()

    const income = searchParams.get('value')
    const parsedIncome = income !== null ? parseInt(income) : 0;
    const minRange = Math.abs(parsedIncome - -10000);
    const maxRange = Math.abs(parsedIncome + 10000);

    const filteredAdvisors = data?.filter((advisor) => advisor.income <= maxRange || advisor.income >= minRange);
    console.log(filteredAdvisors)


    return <div>
        <h1>Advisors</h1>
        <div>
            <ul>
            { data && data.map((advisor: Advisor) => (
                    <div key={advisor.id}>
                        <span>{ advisor.name }</span>
                    </div>
            ))}
            </ul>
        </div>
    </div>
}