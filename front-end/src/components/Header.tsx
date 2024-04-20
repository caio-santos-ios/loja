"use client"

import { cartAtom } from "@/jotai/cart";
import { useAtom } from "jotai";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

export const Header = () => {
    const [cart] = useAtom(cartAtom)

    return (
        <header className="header">
            <h3>Loja</h3>
            <Link href="/cart" className="relative">
                <p className="absolute bottom-3 left-3 bg-green-300 p-1 rounded-full w-10 flex justify-center items-center">
                    {cart.length >= 100 ? "+99" : cart.length}
                </p>
                <FaCartShopping size={25} />
            </Link>
        </header>
    )
}