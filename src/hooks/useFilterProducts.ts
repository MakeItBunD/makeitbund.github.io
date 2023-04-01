import { useMemo } from "react"
import { IFilterParams } from "../interfaces/IFilterParams"
import { IProduct } from "../interfaces/IProduct"

export const useFilterProducts = (products: IProduct[], selectedCare: string, filterParams: IFilterParams | null) => {

    const filtredProducts = useMemo(() => {
        switch(true) {
            case !selectedCare && !filterParams:
                return products 
    
            case selectedCare && !filterParams:
                return products.filter(product => product.careType.includes(selectedCare))
    
            case !selectedCare && !!filterParams && !filterParams.manufacturers.length:
                return products.filter(product => product.price >= filterParams!.minPrice && product.price <= filterParams!.maxPrice)
    
            case !selectedCare && !!filterParams && !!filterParams.manufacturers.length:
                return products.filter(product => product.price >= filterParams!.minPrice && product.price <= filterParams!.maxPrice && filterParams!.manufacturers.includes(product.manufacturer))
    
            case selectedCare !== '' && !!filterParams && !!filterParams.manufacturers.length:
                return products.filter(product => product.careType.includes(selectedCare)).filter(product => product.price >= filterParams!.minPrice && product.price <= filterParams!.maxPrice && filterParams!.manufacturers.includes(product.manufacturer))
    
            case selectedCare && !!filterParams && !filterParams.manufacturers.length:
                return products.filter(product => product.careType.includes(selectedCare)).filter(product => product.price >= filterParams!.minPrice && product.price <= filterParams!.maxPrice)
        }
    }, [products, selectedCare, filterParams])

    return filtredProducts
}