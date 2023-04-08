import React, { useContext } from "react"
import MyButton from "../UI/MyButton"
import MyInput from "../UI/MyInput"
import logoIcon from 'D:/Курсы/shop/src/icons/logo.svg'
import catalogIcon from 'D:/Курсы/shop/src/icons/catalog.svg'
import basketIcon from 'D:/Курсы/shop/src/icons/basket.svg'
import downloadIcon from 'D:/Курсы/shop/src/icons/download.svg'
import consultantImage from 'D:/Курсы/shop/src/images/consultant.png'
import searchIcon from 'D:/Курсы/shop/src/icons/search.svg'
import { useNavigate } from 'react-router-dom'
import { Context } from "../../context"
import { IProduct } from "../../interfaces/IProduct"

function HeaderMenu() {
    const navigate = useNavigate()

    const { basket } = useContext(Context)

    return (
        <div className="header-menu">
            <div className="container">
                <div className="header-menu__container">
                    <div className="header-menu__item">
                        <img src={logoIcon} alt="logo" className="header-menu__icon" />
                    </div>

                    <div className="header-menu__item">
                        <MyButton data-testid='catalog-link' onClick={() => navigate('/catalog')} className="header-menu__button">
                            Каталог 
                            <img src={catalogIcon} alt="" />
                        </MyButton>
                    </div>

                    <div className="header-menu__item">
                        <div className="header-menu__input-container">
                            <MyInput 
                                className='header-menu__input'
                                placeholder='Поиск...'
                                type='text'
                            />
                            <MyButton className="header-menu__input-button">
                                <img src={searchIcon} alt="" />
                            </MyButton>
                        </div>
                    </div>

                    <div className="header-menu__item header-menu__item_contacts">
                        <div className="header-menu__contacts-container">
                            <h2 className="header-menu__number">+7 (777) 490-00-91</h2>
                            <p className="header-menu__working-time">время работы: 9:00-20:00</p>
                            <p className="header-menu__phone-order">Заказать звонок</p>
                        </div>
                        <img src={consultantImage} alt="Консультант" />
                    </div>

                    <div className="header-menu__item">
                        <MyButton className="header-menu__button">
                            Прайс-лист
                            <img src={downloadIcon} alt="" />
                        </MyButton>
                    </div>

                    <div className="header-menu__item header-menu__item_basket">
                        <button data-testid='basket-link' onClick={() => navigate('/basket')} className="header-menu__basket-container">
                            <img src={basketIcon} alt="" />
                            <div data-testid='basket-count' className="header-menu__basket-items-count">{basket.length}</div>
                        </button>
                        <p className="header-menu__basket-price-count">Корзина<br /><span>{basket.reduce((count: number, product: IProduct) => count + product.price * product.count!, 0)} ₸</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu