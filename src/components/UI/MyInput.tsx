import React, { useState } from "react";

interface MyInputProps {
    className: string
    type: string
    placeholder?: string
    valueProp?: any
    onChange?: (value: string) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
}

function MyInput({className, placeholder, type, valueProp, onChange, onBlur, onFocus}: MyInputProps) {
    const [value, setValue] = useState(valueProp ?? '')

    const changeHandler = (value: string) => {
        setValue(value)

        if (onChange) {
            onChange(value)
        }
    }

    return (
        <input 
            className={className + ' input'}
            type={type ?? 'text'} 
            placeholder={placeholder} 
            value={value}
            onChange={event => changeHandler(event.target.value)}
            onBlur={event => onBlur ? onBlur(event) : ''}
            onFocus={event => onFocus ? onFocus(event) : ''}
        />
    )
}

export default MyInput