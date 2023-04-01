import React, { useContext, useEffect, useState } from 'react'
import { IProduct } from '../../interfaces/IProduct'
import MyButton from '../UI/MyButton'
import basketIcon from 'D:/Курсы/shop/src/icons/basket_white.svg'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context'
import MySize from '../UI/MySize'
import MyForm from '../UI/MyForm'
import MyProductParams from '../UI/MyProductParams'
import MyAlert from '../UI/MyAlert'
import errorImage from '../../images/error-image.png'
import MyConfirm from '../UI/MyConfirm'

interface ProductProps {
    product: IProduct
    className: string
}

function Product({ product, className }: ProductProps) {
    const navigate = useNavigate()

    const {setProducts, basket, setBasket, isAdmin} = useContext(Context)
    const [isShowForm, setIsShowForm] = useState<boolean>(false)
    const [isAlert, setIsAlert] = useState<boolean>(false)
    const [isImageError, setIsImageError] = useState<boolean>(false)
    const [isShowConfirm, setIsShowConfirm] = useState<boolean>(false)

    const addHandler = () => {
        setIsAlert(true)

        if (JSON.parse(localStorage.getItem('basket')!).find((prod: IProduct) => prod.barcode === product.barcode)) {
            setBasket(basket.map((prod: IProduct) => {
                if (prod.barcode === product.barcode) {
                    prod.count! += 1
                }

                return prod
            }))
            return
        }
        product.count = 1
        setBasket((basket: IProduct[]) => [...basket, product])
    }

    useEffect(() => {
        setTimeout(() => {
            setIsAlert(false)
        }, 2000)
    }, [isAlert])

    const deleteProduct = (value: boolean) => {
        if (value) {
            setProducts((products: IProduct[]) => products.filter(prod => prod.barcode !== product.barcode))
        }

        setIsShowConfirm(false)
    }

    useEffect(() => {
        const body = document.querySelector('body')

        if (isShowForm) {
            body?.classList.add('modal-active')
        } else {
            body?.classList.remove('modal-active')
        }
    }, [isShowForm])

    useEffect(() => {
        setIsImageError(false)
    }, [product.pictureUrl])

    return (
        <div className={className}>
            {isAlert && <MyAlert/>}
            {isShowConfirm && 
                <MyConfirm 
                    text='Вы уверены что хотите удалить товар?'
                    onClick={deleteProduct}
                />
            }
            <img 
                src={isImageError ? errorImage : product.pictureUrl} 
                alt="Картинка товара" 
                className="product__image" 
                onError={() => setIsImageError(true)}
            />

            <MySize product={product}/>

            <button 
                className="product__name"
                onClick={() => navigate(`/catalog/product/${product.barcode}`)}
            >
                {product.name}
            </button>

            <MyProductParams
                className='product__product-params'
                params={[
                    {name: 'Штрихкод', value: product.barcode},
                    {name: 'Производитель', value: product.manufacturer},
                    {name: 'Бренд', value: product.brand}
                ]}
            />

            <div className="product__footer">
                <h3 className="product__price">{product.price} ₸</h3>
                <MyButton onClick={addHandler} className='product__button'>
                    В корзину
                    <img src={basketIcon} alt="Корзина" />
                </MyButton>
            </div>

            {isAdmin &&
                <div className="product__admin-buttons">
                    <MyButton 
                        onClick={() => setIsShowForm(true)}
                        className='product__admin-button product__admin-button_change'
                    >
                        Изменить
                    </MyButton>

                    <MyButton 
                        onClick={() => setIsShowConfirm(true)}
                        className='product__admin-button product__admin-button_delete'
                    >
                        Удалить
                    </MyButton>
                </div>
            }

            {isShowForm && 
                <MyForm onClick={() => setIsShowForm(false)} product={product}/>
            }
        </div>
    )
}

export default Product