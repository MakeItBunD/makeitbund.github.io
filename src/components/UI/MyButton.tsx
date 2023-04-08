import React from "react";

interface MyButtonProps {
    className: string,
    children: React.ReactNode
    testid?: string
    onClick?: () => void
}

function MyButton({className, children, testid, onClick}: MyButtonProps) {
    return (
        <button 
            className={className + ' button'}
            onClick={() => onClick ? onClick() : ''}
            data-testid={testid}
        >{children}</button>
    )
}

export default MyButton