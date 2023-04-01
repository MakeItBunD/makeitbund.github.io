import React, { useContext } from "react";
import burgerIcon from 'D:/Курсы/shop/src/icons/burger.svg'
import logoIcon from 'D:/Курсы/shop/src/icons/logo.svg'
import basketIcon from 'D:/Курсы/shop/src/icons/basket.svg'
import searchIcon from 'D:/Курсы/shop/src/icons/search_dark.svg'
import catalogIcon from 'D:/Курсы/shop/src/icons/catalog_dark.svg'
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";

function HeaderMenuMobile() {
    const navigate = useNavigate()

    const { basket } = useContext(Context)

    return (
        <div className="header-menu-mobile">
            <div className="header-menu-mobile__container">
                <div className="container">
                    <div className="header-menu-mobile__row">
                        <div className="header-menu-mobile__burger">
                            <img src={burgerIcon} alt="" className="header-menu-mobile__burger-icon"/>
                        </div>

                        <img className="header-menu-mobile__logo" src={logoIcon} alt="" />

                        <button onClick={() => navigate('/basket')} className="header-menu-mobile__basket-button">
                            <img src={basketIcon} alt="Корзина" />
                            <div className="header-menu-mobile__basket-items-count">{basket.length}</div>
                        </button>
                    </div>
                </div>

                <div className="header-menu-mobile__buttons-container">
                    <div className="container">
                        <div className="header-menu-mobile__row header-menu-mobile__row_buttons">
                            <button onClick={() => navigate('/catalog')} className="header-menu-mobile__button header-menu-mobile__button_catalog">
                                <img src={catalogIcon} alt="" />
                                <p>Каталог</p>
                            </button>
                            <button className="header-menu-mobile__button">
                                <img src={searchIcon} alt="" />
                                <p>Поиск</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMenuMobile