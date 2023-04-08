import React, { useState } from 'react' 

interface MySelectProps {
    className: string
    value: string
    onChange: (value: any) => void
    options: {
        name: string
        value: string
    }[]
}

function MySelect({className, value, onChange, options}: MySelectProps) {
    const [valueProp, setValueProp] = useState(value)

    const changeHandler = (value: string) => {
        setValueProp(value)
        onChange(value)
    }

    return (
        <select 
            data-testid='my-select'
            className={className} 
            value={valueProp} 
            onChange={event => changeHandler(event.target.value)}
        >
            {options.map((option: {name: string, value: string}) => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    )
}

export default MySelect