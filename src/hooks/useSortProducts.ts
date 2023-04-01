import { useMemo } from "react"
import { IProduct } from "../interfaces/IProduct"

export const useSortProducts = (products: IProduct[], selectedSort: string, selectedDiarection: string) => {

    const sortProducts = useMemo(() => {
        switch(true) {
            case selectedSort === 'name' && selectedDiarection === 'firstHigh':
                return products.sort((a: any, b: any) => a[selectedSort].localeCompare(b[selectedSort]))

            case selectedSort === 'name' && selectedDiarection === 'firstLow':
                return products.sort((a: any, b: any) => b[selectedSort].localeCompare(a[selectedSort]))

            case selectedSort === 'price' && selectedDiarection === 'firstHigh':
                return products.sort((a: any, b: any) => a[selectedSort] > b[selectedSort] ? -1 : 1)

            case selectedSort === 'price' && selectedDiarection === 'firstLow':
                return products.sort((a: any, b: any) => a[selectedSort] > b[selectedSort] ? 1 : -1)
        }
    }, [products, selectedSort, selectedDiarection]) 

    return sortProducts
}