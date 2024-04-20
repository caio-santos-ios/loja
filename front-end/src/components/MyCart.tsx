"use client"

import { TproductCart } from "@/@types/product";
import { cartAtom } from "@/jotai/cart";
import { useAtom } from "jotai";
import Link from "next/link";
import { useState } from "react";

export const MyCart = () => {
    const [cart, setCart] = useAtom(cartAtom)
    
    const add = (id: string) => {
        const indexProduct = cart.findIndex((product: TproductCart) => String(product.id) == id)
        cart[indexProduct].quantyProduct += 1
        setCart([...cart])
        // localStorage.setItem("cart", JSON.stringify([...cart]))
    }
    
    const remove = (id: string) => {
        const indexProduct = cart.findIndex((product: TproductCart) => String(product.id) == id)
        cart[indexProduct].quantyProduct -= 1
        setCart([...cart])
        // localStorage.setItem("cart", JSON.stringify([...cart]))
    }

    const createOrder = () => {
        
    }

    return (
        <>
            <ul className="flex flex-col gap-4 py-4 items-center h-[70vh] w-full bg-slate-400 relative">
            {
                cart.map((product: TproductCart) => {
                        return (
                            <li className="p-1 flex gap-2 border rounded-md bg-slate-500 shadow-xl shadow-slate-500/80 w-full max-w-xl h-24 relative duration-1000 cursor-pointer hover:shadow-transparent text-white" key={product.id}>
                                <img className="h-full w-20" src={product.photo} alt="foto do produto" />
                                <div className="flex items-center gap-2">
                                    <p className="w-9/12 text-[0.8rem]">{product.name}</p>
                                    <div className="w-2/12 absolute right-1 flex flex-col items-center gap-1">
                                        <button id={String(product.id)} onClick={(e) => add(e.currentTarget.id)} className="bg-slate-400 rounded-md w-full">+</button>
                                        <p>{product.quantyProduct}</p>
                                        <button id={String(product.id)} onClick={(e) => remove(e.currentTarget.id)} className="bg-slate-400 rounded-md w-full">-</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            <div className="absolute bottom-3 flex flex-wrap gap-4">
                <button className=" bg-green-500 text-white p-2 rounded-md w-40">Finalizar compra</button>
                <Link href="/" className="flex justify-center items-center bg-blue-500 text-white p-2 rounded-md w-40">Voltar</Link>
            </div>
            </ul>
        </>
    )
}