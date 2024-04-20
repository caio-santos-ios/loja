"use client"

import { useAtom } from "jotai";
import { Modal } from "./Modal";
import { modalAtom } from "@/jotai/modal";
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { cartAtom } from "@/jotai/cart";

export const ModalCart = () => {
    const [isOpenCart, setIsOpenCart] = useAtom(modalAtom)
    const [cart] = useAtom(cartAtom)

    useEffect(() => {
        // console.log(isOpenCart)
    }, [isOpenCart])

    const cartRemove = (id: any) => {
        console.log(id)
    }
    
    return (
        <Modal isOpen={isOpenCart}>
            <div className="bg-slate-600 w-10/12 h-5/6 m-auto rounded-lg max-w-[50rem] mt-8 p-4">
                <header className="flex items-center justify-between">
                    <h4>Carrinho</h4>
                    <button onClick={() => setIsOpenCart(false)}>
                        <IoCloseSharp size={25} />
                    </button>
                </header>
                <ul className="flex flex-col gap-2 pt-4 h-5/6">
                    {
                        cart.length > 0 ?
                            <li className="p-2 bg-orange-200 flex gap-2 rounded-lg">
                                <img className="bg-slate-200 w-12 h-12" src="" alt="foto do produto" />
                                <span className="w-8/12">
                                    Nome do produto
                                </span>
                                <span>
                                    R$ 10000
                                </span>
                                <button onClick={(e) => cartRemove(e.currentTarget.id)}>
                                    <RiDeleteBin6Fill />
                                </button>
                            </li>
                        :
                        <h1 className="text-center">Vazio</h1>
                    }
                </ul>
            </div>
        </Modal>
    )
}