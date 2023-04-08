import { useMemo } from "react"
import { IProduct } from "../interfaces/IProduct"

export const useManufacturers = (products: IProduct[]) => {

    const getManufacturers = useMemo(() => {
        return Array.from(new Set(products.map((product: IProduct) => product.manufacturer).flat()))
    }, [products])

    return getManufacturers
}

export const useSortParams = (minPrice: number, maxPrice: number, manufacturers: string[]) => {

    const getSortParams = useMemo(() => {
        return {
            minPrice,
            maxPrice,
            manufacturers
        }
    }, [minPrice, maxPrice, manufacturers])

    return getSortParams
}

export const useDisableBody = (isShowForm: boolean) => {

    useMemo(() => {
        const body = document.querySelector('body')

        if (isShowForm) {
            body?.classList.add('modal-active')
        } else {
            body?.classList.remove('modal-active')
        }
    }, [isShowForm])
}