import { useEffect, useState } from 'react';

export const useWindowResize = (): number => {
    const initWidth = window.innerWidth

    const [windowWidth, setWindowWidth] = useState<number>(initWidth)

    useEffect(() => {
        const handleResize = (): void => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowWidth
};