import React from 'react'
import MyButton from './MyButton'

interface MyConfirmProps {
    text: string
    onClick: (value: boolean) => void
}

function MyConfirm({text, onClick}: MyConfirmProps) {
    return (
        <div className="confirm">
            <div className="confirm__container">
                <h2 className="confirm__title">{text}</h2>
                
                <div className="confirm__buttons">
                    <MyButton 
                        className='confirm__button confirm__button_accept'
                        onClick={() => onClick(true)}
                    >Подтвердить</MyButton>

                    <MyButton 
                        className='confirm__button confirm__button_cansel'
                        onClick={() => onClick(false)}
                    >Отмена</MyButton>
                </div>
            </div>
        </div>
    )
}

export default MyConfirm