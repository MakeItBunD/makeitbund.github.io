import React from 'react' 

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
    return (
        <select 
            className={className} 
            value={value} 
            onChange={event => onChange(event.target.value)}
        >
            {options.map((option: {name: string, value: string}) => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    )
}

export default MySelect