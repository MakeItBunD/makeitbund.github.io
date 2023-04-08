import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import './index.css'
import Footer from './components/footer/Footer'
import { useWindowResize } from "./hooks/useWindowResize";
import FooterMobile from "./components/footer/FooterMoble";
import { IProduct } from "./interfaces/IProduct";
import { products as productsData } from "./data/products";
import { Context } from "./context";
import AppRouter from "./components/AppRouter";
import { useProducts } from "./hooks/useProducts";
import { useBasket } from "./hooks/useBasket";
import { useAdmin } from "./hooks/useAdmin";

function App() {
    const windowWidth = useWindowResize()
    const [products, setProducts] = useState<IProduct[]>(useProducts())
    const [basket, setBasket] = useState<IProduct[]>(useBasket())
    const [isAdmin, setIsAdmin] = useState<boolean>(useAdmin())

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])

    useEffect(() => {
        if (!products.length) {
            setProducts(productsData)
        }
        localStorage.setItem('products', JSON.stringify(products))
    }, [products])

    useEffect(() => {
        localStorage.setItem('admin', JSON.stringify(isAdmin))
    }, [isAdmin])

    return (
        <Context.Provider value={{
            products,
            setProducts,
            basket,
            setBasket,
            isAdmin,
            setIsAdmin
        }}>
            <Header/>
            <AppRouter/>
            {windowWidth > 767 ? <Footer/> : <FooterMobile/>}
        </Context.Provider>
    )
}

export default App