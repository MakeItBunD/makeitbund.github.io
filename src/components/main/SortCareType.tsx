import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import { IProduct } from "../../interfaces/IProduct";

interface SortCareTypeProps {
    paretClassName: string
    onClick: (value: string) => void
    selected: string
}

function SortCareType({paretClassName, onClick, selected}: SortCareTypeProps) {
    const {products} = useContext(Context)

    const [careTypes, setCareTypes] = useState<string[]>([])

    useEffect(() => {
        setCareTypes(Array.from(new Set(products.map((product: IProduct) => product.careType.map(type => type.trim())).flat())))
    }, [products])

    return (
        <div className={paretClassName + "__sort-care-type"}>
            {careTypes.map((careType: string) => (
                <button 
                    key={careType} 
                    className={selected === careType ? paretClassName + "__sort-care-type-item active" : paretClassName + "__sort-care-type-item"}
                    data-care={careType}
                    onClick={event => onClick(event.currentTarget.dataset.care!)}
                >{careType}</button>
            ))}
        </div>
    )
}

export default SortCareType