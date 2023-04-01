import React from "react";

interface MyButtonProps {
    className: string,
    children: React.ReactNode
    onClick?: () => void
}

function MyButton({className, children, onClick}: MyButtonProps) {
    return (
        <button 
            className={className + ' button'}
            onClick={() =>  onClick ? onClick() : ''}
        >{children}</button>
    )
}

export default MyButton