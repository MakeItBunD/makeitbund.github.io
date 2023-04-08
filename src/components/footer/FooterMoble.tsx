import React from 'react'
import logoIcon from 'D:/Курсы/shop/src/icons/logo_white.svg'
import MyButton from '../UI/MyButton'
import downloadIcon from 'D:/Курсы/shop/src/icons/download.svg'
import MyInput from '../UI/MyInput'
import arrowRightIcon from 'D:/Курсы/shop/src/icons/arrow_right.svg'
import whatsupIcon from 'D:/Курсы/shop/src/icons/whatsup.svg'
import telegramIcon from 'D:/Курсы/shop/src/icons/telegram.svg'
import visaIcon from 'D:/Курсы/shop/src/icons/visa.svg'
import mastercardIcon from 'D:/Курсы/shop/src/icons/mastercard.svg'

function FooterMobile() {
    return (
        <div data-testid='mobile-footer-component' className="footer-mobile">
            <div className="container">
                <div className="footer-mobile__container">
                    <div className="footer-mobile__row footer-mobile__row_header">
                        <img src={logoIcon} alt="" className='footer-mobile__logo'/>
                        <MyButton className='footer-mobile__price-button'>
                            <p>Прайс-лист</p>
                            <img src={downloadIcon} alt="" />
                        </MyButton>
                    </div>

                    <div className="footer-mobile__row footer-mobile__row_subscribe">
                        <p className="footer-mobile__text">Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
                        <p className="footer-mobile__text footer-mobile__text_subscribe">Подпишись на скидки и акции</p>
                        <div className="footer-mobile__input-container">
                            <MyInput 
                                className='footer-mobile__input'
                                placeholder='Введите ваш E-mail'
                                type='text'
                            />
                            <MyButton className="footer-mobile__button">
                                <img src={arrowRightIcon} alt="" />
                            </MyButton>
                        </div>
                    </div>

                    <div className="footer-mobile__row footer-mobile__row_links">
                        <div className="footer-mobile__column">
                            <h2 className="footer-mobile__title">Меню сайта:</h2>
                            <p className="footer-mobile__link">О компании</p>
                            <p className="footer-mobile__link">Доставка и оплата</p>
                            <p className="footer-mobile__link">Возврат</p>
                            <p className="footer-mobile__link">Контакты</p>
                        </div>

                        <div className="footer-mobile__column">
                            <h2 className="footer-mobile__title">Категории:</h2>
                            <p className="footer-mobile__link">Бытовая химия</p>
                            <p className="footer-mobile__link">Косметика и гигиена</p>
                            <p className="footer-mobile__link">Товары для дома</p>
                            <p className="footer-mobile__link">Товары для детей и мам</p>
                            <p className="footer-mobile__link">Посуда</p>
                        </div>
                    </div>

                    <div className="footer-mobile__row footer-mobile__row_contacts">
                        <h2 className="footer-mobile__title footer-mobile__title_contact">Контакты:</h2>

                        <div className="footer-mobile__item">
                            <div className="footer-mobile__column footer-mobile__column_contact">
                                <p className="footer-mobile__number">+7 (777) 490-00-91</p>
                                <p className="footer-mobile__working-time">время работы: 9:00-20:00</p>
                                <p className="footer-mobile__phone-order">Заказать звонок</p>
                            </div>

                            <div className="footer-mobile__column">
                                <p className="footer-mobile__contact">Связь в мессенджерах:</p>
                                <div className="footer-mobile__social-media">
                                    <img src={whatsupIcon} alt="" className="footer-mobile__media-link footer-mobile__media-link_whatsup"/>
                                    <img src={telegramIcon} alt="" className="footer-mobile__media-link footer-mobile__media-link_telegram"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-mobile__row footer-mobile__row_cards">
                        <p className="footer-mobile__mail">opt.sultan@mail.ru<br /><span>На связи в любое время</span></p>
                        <div className="footer-mobile__credit-cards">
                            <img src={visaIcon} alt="" className="footer-mobile__card"/>
                            <img src={mastercardIcon} alt="" className="footer-mobile__card"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMobile