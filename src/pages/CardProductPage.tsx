import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyBackButton from '../components/UI/MyBackButton'
import MyRoutesMap from '../components/UI/MyRoutesMap'
import { useWindowResize } from '../hooks/useWindowResize'
import { IProduct } from '../interfaces/IProduct'
import basketIcon from '../icons/basket_white.svg'
import MyButton from '../components/UI/MyButton'
import downloadIcon from '../icons/download_black.svg'
import shareIcon from '../icons/share.svg'
import arrowDownFillIcon from '../icons/arrow_down_fill.svg'
import arrowUpFillIcon from '../icons/arrow-up_fill.svg'
import { Context } from '../context'
import MySize from '../components/UI/MySize'
import MyProductParams from '../components/UI/MyProductParams'
import MyAlert from '../components/UI/MyAlert'
import errorImage from '../images/error-image.png'

function CardProductPage() {
    const windowWidth = useWindowResize()
    const params = useParams()
    const {products, basket, setBasket} = useContext(Context)

    const [count, setCount] = useState<number>(1)
    const [isShowDescription, setIsShowDescription] = useState<boolean>(false)
    const [isShowParams, setIsShowParams] = useState<boolean>(false)
    const [isAlert, setIsAlert] = useState<boolean>(false)
    const [isImageError, setIsImageError] = useState<boolean>(false)

    const product = products.find((product: IProduct) => product.barcode === +params.barcode!)!

    const links = [
        {name: 'Главная', path: '/main'},
        {name: 'Косметика и гигиена', path: '/catalog'},
        {name: product.name, path: `/catalog/product/${product.name}`}
    ]

    const addCountHandler = () => {
        setCount(count + 1)
    }

    const subtractCountHandler = () => {
        if (count === 1) return

        setCount(count - 1)
    }

    const addProductHandler = () => {
        setIsAlert(true)

        if (JSON.parse(localStorage.getItem('basket')!).find((prod: IProduct) => prod.barcode === product.barcode)) {
            setBasket(basket.map((prod: IProduct) => {
                if (prod.barcode === product.barcode) {
                    prod.count! += count
                }

                return prod
            }))

            return
        }

        product.count = count
        setBasket((basket: IProduct[]) => [...basket, product])
    }

    useEffect(() => {
        setTimeout(() => {
            setIsAlert(false)
        }, 2000)
    }, [isAlert])

    return (
        <div className="card-product">
            {isAlert && <MyAlert/>}
            <div className="container">
                <div className="card-product__container">
                    {windowWidth > 963
                        ? <MyRoutesMap routesMap={links}/>
                        : <MyBackButton routesMap={links}/>
                    }
                    
                    <div className="card-product__content">
                        <img 
                            className='card-product__image' 
                            src={isImageError ? errorImage : product.pictureUrl} 
                            alt="Картинка товара" 
                            onError={() => setIsImageError(true)}
                        />

                        <div className="card-product__description-container">
                            <div className="card-product__item">
                                <h2 className="card-product__stock">В наличии</h2>
                            </div>

                            <div className="card-product__item">
                                <h1 className="card-product__name">{product.name}</h1>
                            </div>
                            
                            <MySize product={product}/>
                            
                            {windowWidth > 1150
                                ? 
                                <>
                                    <div className="card-product__item card-product__item_price">
                                        <h2 className="card-product__price">{product.price} ₸</h2>

                                        <div className="card-product__count-buttons">
                                            <button onClick={subtractCountHandler} className='card-product__count-button'>-</button>
                                            <span className="card-product__count">{count}</span>
                                            <button onClick={addCountHandler} className='card-product__count-button'>+</button>
                                        </div>

                                        <MyButton onClick={addProductHandler} className='card-product__basket-button'>
                                            В корзину
                                            <img src={basketIcon} alt="" />
                                        </MyButton>
                                    </div>
                                                                
                                    <div className="card-product__item card-product__item_share">
                                        <img className='card-product__share-button' src={shareIcon} alt="Поделится" />
                                        <p className="card-product__promotion">При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области</p>
                                        <p className="card-product__price-button">
                                            Прайс-лист
                                            <img src={downloadIcon} alt="" />
                                        </p>
                                    </div>
                                </>
                                : 
                                <>
                                    <div className="card-product__item card-product__item_price">
                                        <h2 className="card-product__price">{product.price} ₸</h2>

                                        <div className="card-product__count-buttons">
                                            <button onClick={subtractCountHandler} className='card-product__count-button'>-</button>
                                            <span className="card-product__count">{count}</span>
                                            <button onClick={addCountHandler} className='card-product__count-button'>+</button>
                                        </div>
                                    </div>
                                                                
                                    <div className="card-product__item card-product__item_share">
                                        <MyButton onClick={addProductHandler} className='card-product__basket-button'>
                                            В корзину
                                            <img src={basketIcon} alt="" />
                                        </MyButton>

                                        <img className='card-product__share-button' src={shareIcon} alt="Поделится" />
                                    </div>

                                    <p className="card-product__promotion">При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области</p>

                                    <p className="card-product__price-button">
                                        Прайс-лист
                                        <img src={downloadIcon} alt="" />
                                    </p>
                                </>
                            }
                                                        
                            <div className="card-product__item card-product__item_props">
                                <MyProductParams
                                    className='card-product__product-params'
                                    params={[
                                        {name: 'Производитель', value: product.manufacturer},
                                        {name: 'Брэнд', value: product.brand},
                                        {name: 'Артикул', value: Math.floor(product.barcode / 10000000)},
                                        {name: 'Штрихкод', value: product.barcode},
                                        product.sizeType === 'volume'
                                            ? {name: 'Обьем', value: product.size + ' мл'}
                                            : {name: 'Вес', value: product.size + ' г'}
                                    ]}
                                />
                            </div>

                            <div className="card-product__item card-product__item_description-button">
                                <button 
                                    className='card-product__descriptrion-button'
                                    onClick={() => setIsShowDescription(!isShowDescription)}
                                >Описаниe <img src={isShowDescription ? arrowUpFillIcon : arrowDownFillIcon} alt="" /></button>
                            </div>
                            
                            {isShowDescription &&
                                <div className="card-product__item card-product__item_description">
                                    <p className="card-product__description">{product.description}</p>
                                </div>
                            }

                            <div className="card-product__item card-product__item_line"></div>

                            <div className="card-product__item card-product__item_сharacteristics-button">
                                <button 
                                    className='card-product__params-button'
                                    onClick={() => setIsShowParams(!isShowParams)}
                                >Характеристики <img src={isShowParams ? arrowUpFillIcon : arrowDownFillIcon} alt="" /></button>
                            </div>

                            {isShowParams &&
                                <div className="card-product__item card-product__item_props">
                                    <div className="card-product__params card-product__params_down">
                                        <MyProductParams
                                            className='card-product__product-params'
                                            params={[
                                                {name: 'Назначение', value: product.brand},
                                                {name: 'Тип', value: product.brand},
                                                {name: 'Производитель', value: product.manufacturer},
                                                {name: 'Артикул', value: Math.floor(product.barcode / 10000000)},
                                                {name: 'Штрихкод', value: product.barcode},
                                                product.sizeType === 'volume'
                                                    ? {name: 'Обьем', value: product.size + ' мл'}
                                                    : {name: 'Вес', value: product.size + ' г'}
                                            ]}
                                        />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProductPage