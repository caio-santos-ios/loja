import { IChildren } from "@/@types/children";
import { LayoutPage } from "@/components/LayoutPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Carrinho",
    description: "Carrinho de compras"
}

const LayoutCart = ({ children }: IChildren) => <LayoutPage children={children} />

export default LayoutCart;