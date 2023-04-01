import { useMemo } from "react"

export const useBasket = () => {
    
    const getBasket = useMemo(() => {
        if (localStorage.getItem('basket')) {
            return JSON.parse(localStorage.getItem('basket')!)
        } else {
            localStorage.setItem('basket', JSON.stringify([]))
            return []
        }
    }, [])

    return getBasket
}