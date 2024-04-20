"use client"

import { Tproduct, TproductCart } from "@/@types/product";
import { cartAtom } from "@/jotai/cart";
import { productAtom } from "@/jotai/products";
import { api } from "@/services/api";
import { setCookie } from "cookies-next";
import { useAtom } from "jotai";

interface Iprops {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: string;
    quanty: number;
}

export const CardProduct = ({id, name, price, photo}: Iprops) => {
    const [cart, setCart] = useAtom(cartAtom)
    const [products] = useAtom(productAtom)
 
    const addCart = async (id: string) => {
        const findProduct = products.find((product: Tproduct) => String(product.id) == id)
               
        if(cart.length > 0) {
            const indexProduct = cart.findIndex((product: Tproduct) => String(product.id) == id)

            if(indexProduct < 0) {
                const newCart = [...cart, { quantyProduct: 1, ...findProduct }]                
                setCookie("cart", JSON.stringify(newCart))
                return
            }
            
            cart[indexProduct].quantyProduct += 1
            setCookie("cart", JSON.stringify(newCart))
            return
        }
        setCart([{ quantyProduct: 1, ...findProduct }])
    }

    return(
        <div className="bg-slate-300 text-black w-full h-[30rem] max-w-sm rounded-md flex flex-col border relative">
            <img className="h-72 rounded-t-md" src={photo} alt="foto do produto" />
            <div className="p-2 flex flex-col gap-2">
                <p>{name}</p>
                <p>R$ {price}</p>
                <button onClick={(e) => addCart(e.currentTarget.id)} className="bg-green-500 p-2 rounded-md absolute bottom-2" id={String(id)}>Comprar</button>
            </div>
        </div>
    )
}