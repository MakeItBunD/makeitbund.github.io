import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BasketList from '../components/main/BasketList'
import MyBackButton from '../components/UI/MyBackButton'
import MyButton from '../components/UI/MyButton'
import MyModal from '../components/UI/MyModal'
import MyRoutesMap from '../components/UI/MyRoutesMap'
import { Context } from '../context'
import { useWindowResize } from '../hooks/useWindowResize'
import { IProduct } from '../interfaces/IProduct'

function BasketPage() {
    const links = [
        {name: 'Главная', path: '/main'},
        {name: 'Корзина', path: '/basket'}
    ]

    const windowWidth = useWindowResize()
    const navigate = useNavigate()
    const { basket, setBasket } = useContext(Context)
    const [showModal, setShowModal] = useState<boolean>(false)

    const createOrder = () => {
        setBasket([])
        setShowModal(true)
    }

    return (
        <div className="basket">
            <div className="container">
                {windowWidth > 963
                    ? <MyRoutesMap routesMap={links}/>
                    : <MyBackButton routesMap={links}/>
                }

                {basket.length 
                    ? 
                    <div className="basket__container">

                        <div className="basket__header">
                            <h2 className="basket__title">Корзина</h2>
                        </div>

                        <BasketList products={basket}></BasketList>

                        <div className="basket__footer">
                            <MyButton onClick={createOrder} className='basket__button'>Оформить заказ</MyButton>
                            <h2 className="basket__price">{basket.reduce((count: number, product: IProduct) => count + product.price * product.count!, 0)} ₸</h2>
                        </div>
                    </div>
                    : 
                    <>
                        <h2 className="basket__empty-message">Корзина пуста</h2>
                        <MyButton className='basket__back-button' onClick={() => navigate('/catalog')}>Выбрать товар в каталоге</MyButton>
                    </> 
                }
            </div>
            {showModal && <MyModal onClick={() => setShowModal(false)}/>}
        </div>
    )
}

export default BasketPage