import React from "react"
import messageIcon from 'D:/Курсы/shop/src/icons/message.svg'
import locationIcon from 'D:/Курсы/shop/src/icons/location.svg'

function HeaderNavbar() {
    return (
        <div className="header-navbar">
            <div className="container">
                <ul className="header-navbar__list">
                    <li className="header-navbar__item">
                        <img src={locationIcon} alt="location" className="header-navbar__icon" />
                        <p className="header-navbar__text">г. Кокчетав, ул. Ж. Ташенова 129Б<br/><span>(Рынок Восточный)</span></p>
                    </li>

                    <li className="header-navbar__item header-navbar__item_mail">
                        <img src={messageIcon} alt="location" className="header-navbar__icon"/>
                        <p className="header-navbar__text">opt.sultan@mail.ru<br/><span>На связи в любое время</span></p>
                    </li>

                    <div className="header-navbar__item header-navbar__item_links">
                        <li className="header-navbar__link">О компании</li>
                        <li className="header-navbar__link">Доставка и оплата</li>
                        <li className="header-navbar__link">Возврат</li>
                        <li className="header-navbar__link">Контакты</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default HeaderNavbar