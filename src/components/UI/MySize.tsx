import React from "react";
import { IProduct } from "../../interfaces/IProduct";
import volumeIcon from 'D:/Курсы/shop/src/icons/volume-type.svg'
import weightIcon from 'D:/Курсы/shop/src/icons/weight-type.svg'

interface MySizeProps {
    product: IProduct
}

function MySize({product}: MySizeProps) {
    return (
        <div className="size">
            {product.sizeType === 'volume'
                ? <img src={volumeIcon} alt="" />
                : <img src={weightIcon} alt="" />
            }
            <small> {product.size} </small>
            {product.sizeType === 'volume'
                ? <small>мл</small>
                : <small>г</small>
            }
        </div>
    )
}

export default MySize