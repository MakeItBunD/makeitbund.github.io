import React, { useContext, useState } from 'react'
import deleteIcon from 'D:/Курсы/shop/src/icons/delete.svg'
import MyButton from '../UI/MyButton'
import { IProduct } from '../../interfaces/IProduct'
import { Context } from '../../context'
import MySize from '../UI/MySize'
import MyConfirm from '../UI/MyConfirm'

interface BasketProductProps {
    product: IProduct
}

function BasketProduct({product}: BasketProductProps) {
    const {basket, setBasket} = useContext(Context)
    const [isShowConfirm, setIsShowConfirm] = useState<boolean>(false)

    const addCountHandler = () => {
        setBasket(basket.map((prod: IProduct) => {
            if (prod.barcode === product.barcode) {
                prod.count! += 1
            }

            return prod
        }))
    }

    const subtractCountHandler = () => {
        if (product.count === 1) return

        setBasket(basket.map((prod: IProduct) => {
            if (prod.barcode === product.barcode) {
                prod.count! -= 1
            }

            return prod
        }))
    }

    const deleteProduct = (value: boolean) => {
        if (value) {
            setBasket(basket.filter((prod: IProduct) => prod.barcode !== product.barcode))
        }

        setIsShowConfirm(false)
    }

    return (
        <div className="basket-product">
            {isShowConfirm && 
                <MyConfirm 
                    text='Вы уверены что хотите удалить товар?'
                    onClick={deleteProduct}
                />
            }
            <img 
                src={product.pictureUrl} 
                alt="Картинка товара" 
                className="basket-product__image" 
            />

            <div className="basket-product__item basket-product__item_description">
                <MySize product={product}/>

                <h1 className="basket-product__name">{product.name}</h1>

                <p className="basket-product__description">{product.description.slice(0, 150)}...</p>
            </div>

            <div className="basket-product__item basket-product__item_price">
                <div className="basket-product__count-buttons">
                    <button onClick={subtractCountHandler} className='basket-product__count-button'>-</button>
                    <span className="basket-product__count">{product.count}</span>
                    <button onClick={addCountHandler} className='basket-product__count-button'>+</button>
                </div>

                <h2 className="basket-product__price">{product.price * product.count!} ₸</h2>

                <MyButton onClick={() => setIsShowConfirm(true)} className='basket-product__delete-button'>
                    <img src={deleteIcon} alt="" />
                </MyButton>
            </div>
        </div>
    )
}

export default BasketProduct