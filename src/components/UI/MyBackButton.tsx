import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowLeftIcon from 'D:/Курсы/shop/src/icons/arrow_left.svg'
import { IRoutesMap } from '../../interfaces/IRoutesMap'

interface MyBackButtonProps {
    routesMap: IRoutesMap[]
}

function MyBackButton({routesMap}: MyBackButtonProps) {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => navigate(routesMap[routesMap.length - 2].path)}
            className='back-button'
        >
            <img src={arrowLeftIcon} alt="" />
            Назад
        </button>
    )
}

export default MyBackButton