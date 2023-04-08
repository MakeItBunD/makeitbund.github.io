import React from "react";

interface MyPriceInputProps {
    className: string
    value: number
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function MyPriceInput({className, value, onChange}: MyPriceInputProps) {
    return (
        <div className="side-bar__price-inputs">
            <input 
                className={className}
                type="number" 
                value={value} 
                onChange={onChange}
                onFocus={event => event.target.select()}
            />
        </div>
    )
}

export default MyPriceInput