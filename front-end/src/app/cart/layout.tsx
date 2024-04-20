import { LayoutPage } from "@/components/LayoutPage";
import { Metadata } from "next";
import React from "react";

interface Iprops {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Carrinho",
    description: "Carrinho de compras"
}

const LayoutCart = ({ children }: Iprops) => <LayoutPage children={children} />

export default LayoutCart;