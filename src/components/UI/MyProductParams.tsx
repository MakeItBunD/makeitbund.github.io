import React from 'react'

interface MyProductParamsProps {
    className: string
    params: {
        name: string
        value: string | number
    }[]
}

function MyProductParams({className, params}: MyProductParamsProps) {
    return (
        <div className={className + ' product-params'}>
            {params.map(param => (
                <p key={param.name} className="product-params__item"><span>{param.name}</span>: {param.value}</p>
            ))}
        </div>
    )
}

export default MyProductParams