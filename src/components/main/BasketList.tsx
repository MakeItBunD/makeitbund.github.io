import React from 'react'
import { IProduct } from '../../interfaces/IProduct'
import BasketProduct from './BasketProduct'

interface BasketListProps {
    products: IProduct[]
}

function BasketList({products}: BasketListProps) {
    return (
        <div className='basket__content'>
                {products.map((product, index) => (
                    <BasketProduct 
                        key={index} 
                        product={product}
                    />
                ))}
        </div>
    )
}

export default BasketList