import React, { useContext, useEffect, useState } from 'react'
import MyButton from '../../components/UI/MyButton'
import MyInput from '../../components/UI/MyInput'
import { Context } from '../../context'
import closeIcon from 'D:/Курсы/shop/src/icons/close.svg'

interface MyLoginProps {
    onClick: () => void
}

function MyLogin({onClick}: MyLoginProps) {
    const [password, setPassword] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const {setIsAdmin} = useContext(Context)

    const loginHandler = (event: React.FocusEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (password !== 'admin') {
            setIsError(true)
            return
        }

        setIsAdmin(true)
        onClick()
    }

    useEffect(() => {
        const input: HTMLInputElement = document.querySelector('.login__input')!
        input.focus()
    }, [])

    return (
        <div className="login">
            <div className="container">
                <div className="login__container">
                    <form onSubmit={loginHandler} className="login__form">
                        <div className="login__input-container">
                            <label className="login__label">Пароль</label>
                            <MyInput 
                                valueProp={password}
                                className={isError ? 'login__input error' : 'login__input'}
                                type='password'
                                onChange={value => setPassword(value)}
                                onFocus={() => setIsError(false)}
                            />
                            <small className={isError ? 'error' : ''}>Неправильный пароль</small>
                        </div>
                        <MyButton className='login__button'>Войти</MyButton>
                        <button className='login__close-button' onClick={() => onClick()}>
                            <img src={closeIcon} alt="Закрыть" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MyLogin