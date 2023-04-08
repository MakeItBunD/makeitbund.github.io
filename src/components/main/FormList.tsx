import React from "react";
import MyInput from "../UI/MyInput";

interface IFormItem {
    name: string
    type: string
    value: string | number
    onChange: (value: string) => void
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void
}

interface FormListProps {
    formItems: IFormItem[]
}

function FormList({ formItems }: FormListProps) {
    return (
        <>
            {formItems.map((formItem: IFormItem) => (
                <div key={formItem.name} className="form__item">
                    <label className='form__label'>{formItem.name}</label>
                    <MyInput 
                        className='form__input'
                        type={formItem.type}
                        valueProp={formItem.value}
                        onChange={formItem.onChange}
                        onBlur={formItem.onBlur}
                        onFocus={formItem.onFocus}
                    />
                    <small>Обязательное поле для заполнения</small>
                </div>
            ))}
        </>
    )
}

export default FormList