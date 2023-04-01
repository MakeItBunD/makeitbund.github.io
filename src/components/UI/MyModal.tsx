import React from 'react'
import checkIcon from 'D:/Курсы/shop/src/icons/check.svg'
import closeIcon from 'D:/Курсы/shop/src/icons/close.svg'

interface MyModalProps {
    onClick: () => void
}

function MyModal({onClick}: MyModalProps) {
    return (
        <div className="modal">
            <div className="modal__container">
                <div className='modal__icon'>
                    <img src={checkIcon} alt="" />
                </div>

                <h2 className="modal__title">Спасибо за заказ</h2>
                <p className="modal__description">Наш менеджер свяжется с вами в ближайшее время</p>
                
                <button onClick={() => onClick()} className="modal__button">
                    <img src={closeIcon} alt="Закрыть" />
                </button>
            </div>
        </div>
    )
}

export default MyModal