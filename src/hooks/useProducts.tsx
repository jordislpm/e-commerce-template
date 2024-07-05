"use client"
import { products as productsApi } from "@/services/products";
import { ProductProps } from "@/types";
import { useEffect, useState } from "react"

export const useProducts = () => {
    const [products, setProducts] = useState();

    const fetch = async () => {
        const allProducts = await productsApi();
        console.log(allProducts)
    }

    useEffect(() => {
        fetch();
    }, [])
    
    return { products };
}