import { useMemo } from "react"

export const useAdmin = () => {
    
    const getAdmin = useMemo(() => {
        if (!localStorage.getItem('admin')) {
            localStorage.setItem('admin', JSON.stringify(false))
            return false
        } else if (localStorage.getItem('admin') === 'true') {
            return true
        } else {
            localStorage.setItem('admin', JSON.stringify(false))
            return false
        }
    }, [])

    return getAdmin
}