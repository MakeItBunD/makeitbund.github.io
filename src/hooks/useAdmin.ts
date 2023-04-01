import { useMemo } from "react"

export const useAdmin = () => {
    
    const getAdmin = useMemo(() => {
        if (localStorage.getItem('admin')) {
            return JSON.parse(localStorage.getItem('admin')!)
        } else {
            localStorage.setItem('admin', JSON.stringify(false))
            return []
        }
    }, [])

    return getAdmin
}