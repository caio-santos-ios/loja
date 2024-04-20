"use client"

import { Tproduct } from "@/@types/product"
import { productAtom } from "@/jotai/products"
import { api } from "@/services/api"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { CardProduct } from "./CardProduct"

interface Iprops {
    listProduct: any[]
}

export const ListProduct = () => {
    const [products, setProducts] = useAtom(productAtom)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await api.get("/products")
                setProducts(res.data)
            } catch (error) {}
        }
        getProducts()
    }, [])


    return(
        <ul className="grid md:grid-cols-3 gap-4 py-4">
            {
                products.map((product: Tproduct) => {
                    return <CardProduct key={product.id} id={product.id} photo={product.photo} name={product.name} description={product.description} quanty={product.quanty} price={product.price}  />
                })
            }
        </ul>
    )
}