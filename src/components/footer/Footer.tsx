import React from 'react'
import logoIcon from 'D:/Курсы/shop/src/icons/logo.svg'
import MyInput from '../UI/MyInput'
import arrowRightIcon from 'D:/Курсы/shop/src/icons/arrow_right.svg'
import downloadIcon from 'D:/Курсы/shop/src/icons/download.svg'
import whatsupIcon from 'D:/Курсы/shop/src/icons/whatsup.svg'
import telegramIcon from 'D:/Курсы/shop/src/icons/telegram.svg'
import visaIcon from 'D:/Курсы/shop/src/icons/visa.svg'
import mastercardIcon from 'D:/Курсы/shop/src/icons/mastercard.svg'
import MyButton from '../UI/MyButton'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__column">
                        <img src={logoIcon} alt="" className="footer__logo" />
                        <p className="footer__text">Компания «Султан» — снабжаем<br />розничные магазины товарами<br />"под ключ" в Кокчетаве и Акмолинской<br />области</p>
                        <p className="footer__text footer__text_subscribe">Подпишись на скидки и акции</p>
                        <div className="footer__input-container">
                            <MyInput 
                                className='footer__input'
                                placeholder='Введите ваш E-mail'
                                type='text'
                            />
                            <MyButton className="footer__button">
                                <img src={arrowRightIcon} alt="" />
                            </MyButton>
                        </div>
                    </div>

                    <div className="footer__column">
                        <h2 className="footer__title">Меню сайта:</h2>
                        <p className="footer__link">О компании</p>
                        <p className="footer__link">Доставка и оплата</p>
                        <p className="footer__link">Возврат</p>
                        <p className="footer__link">Контакты</p>
                    </div>

                    <div className="footer__column">
                        <h2 className="footer__title">Категории:</h2>
                        <p className="footer__link">Бытовая химия</p>
                        <p className="footer__link">Косметика и гигиена</p>
                        <p className="footer__link">Товары для дома</p>
                        <p className="footer__link">Товары для детей и мам</p>
                        <p className="footer__link">Посуда</p>
                    </div>

                    <div className="footer__column">
                        <h2 className="footer__title">Скачать прайс-лист:</h2>
                        <MyButton className='footer__price-button'>
                            <p>Прайс-лист</p>
                            <img src={downloadIcon} alt="" />
                        </MyButton>
                        <p className="footer__text footer__text_contact">Связь в мессенджерах:</p>
                        <div className="footer__social-media">
                            <div className="footer__media-link footer__media-link_whatsup">
                                <img src={whatsupIcon} alt="" />
                            </div>
                            <div className="footer__media-link footer__media-link_telegram">
                                <img src={telegramIcon} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="footer__column">
                        <h2 className="footer__title">Контакты:</h2>
                        <p className="footer__number">+7 (777) 490-00-91</p>
                        <p className="footer__working-time">время работы: 9:00-20:00</p>
                        <p className="footer__phone-order">Заказать звонок</p>
                        <p className="footer__mail">opt.sultan@mail.ru<br /><span>На связи в любое время</span></p>
                        <div className="footer__credit-cards">
                            <img src={visaIcon} alt="" className="footer__card"/>
                            <img src={mastercardIcon} alt="" className="footer__card"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer