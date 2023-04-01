import { useMemo } from "react"
import { products } from "../data/products";

export const useProducts = () => {
    
    const getProducts = useMemo(() => {
        if (localStorage.getItem('products') && localStorage.getItem('products') !== 'undefined' && localStorage.getItem('products') !== '[]') {
            return JSON.parse(localStorage.getItem('products')!)
        } else {
            localStorage.setItem('products', JSON.stringify(products))
            return products
        }
    }, [])

    return getProducts
}