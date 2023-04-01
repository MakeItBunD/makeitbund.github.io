import React, { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/IProduct";
import Product from "./Product";
import arrowLeftIcon from 'D:/Курсы/shop/src/icons/arrow-left_yellow.svg'
import arrowRightIcon from 'D:/Курсы/shop/src/icons/arrow-right_yellow.svg'

interface ProductsListParams {
    products: IProduct[]
}

function ProductsList({products}: ProductsListParams) {
    const [pagesCount, setPagesCount] = useState<number>(1)
    const [pagesArr, setPagesArr] = useState<number[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [isWindowLoaded, setIsWindowLoaded] = useState<boolean>(false)

    useEffect(() => {

        for (let i = 1; i <= pagesCount; i++) {
            if (pagesArr.includes(i)) continue
            setPagesArr(prev => [...prev, i])
        }

        setCurrentPage(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pagesCount])

    useEffect(() => {
        if (pagesCount === Math.ceil(products.length / 9)) return

        setPagesCount(Math.ceil(products.length / 9))
        setPagesArr([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products])

    const pageLeftHandler = () => {
        if (currentPage === 1) return

        setCurrentPage(currentPage - 1)
    }

    const pageRightHandler = () => {
        if (currentPage === pagesCount) return

        setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        if (!isWindowLoaded) {
            setIsWindowLoaded(true)
            return
        }
        
        const container = document.querySelector('.products__content')!
        container.scrollIntoView({block: 'start', behavior: 'smooth'})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    return (
        <div className="products">
            <div className="products__content">
                {Object.keys(products).length
                    ? products.map((product, index) => (
                        <Product 
                            key={product.barcode} 
                            product={product}
                            className={pagesCount > 1 
                                ? index + 1 <= currentPage * 9 && index >= currentPage * 9 - 9 
                                    ? "product" 
                                    : "product product_none" 
                                : "product"}
                        />
                    ))
                    : <h2 className="products__title">По вашим параметрам ничего не найдено</h2>
                }
            </div>

            <div className="products__page-buttons">
                {pagesCount > 1 &&
                    <>
                        <button onClick={pageLeftHandler} className="products__arrow-button products__arrow-button_left"><img src={arrowLeftIcon} alt="" /></button>
                        {pagesArr.map(page => (
                            <button 
                                key={page} 
                                className={currentPage === page ? "products__button products__button_active" : "products__button"}
                                onClick={() => setCurrentPage(page)}
                                >
                            {page}</button>
                        ))}
                        <button onClick={pageRightHandler} className="products__arrow-button products__arrow-button_right"><img src={arrowRightIcon} alt="" /></button>
                    </>
                }
            </div>
        </div>
    )
}

export default ProductsList