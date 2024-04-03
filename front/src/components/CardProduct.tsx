"use client"

import { api } from "@/services/api";

interface Iprops {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: string;
    quanty: number;
}

export const CardProduct = ({id, name, price}: Iprops) => {
    const myVariable = process.env.API_LOJA;

    console.log(myVariable)

    const add = async (id: string) => {
        try {
            const res = await api.post(`/orders/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="p-2 bg-slate-300 text-black w-72 h-96">
            <p>{name}</p>
            <button onClick={(e) => add(e.currentTarget.id)} className="bg-green-500 p-2" id={String(id)}>Comprar</button>
        </div>
    )
}