import React, { useContext, useState } from 'react'
import { Context } from '../../context'
import { IProduct } from '../../interfaces/IProduct'
import MyButton from './MyButton'
import MyInput from './MyInput'
import MySelect from './MySelect'
import closeIcon from 'D:/Курсы/shop/src/icons/close.svg'

interface MyFormProps {
    product?: IProduct
    onClick: () => void
}

function MyForm({product, onClick}: MyFormProps) {
    const {setProducts} = useContext(Context)
    const [isValidate, setIsValidate] = useState<boolean>(false)

    const [name, setName] = useState<string>(product ? product.name : '') 
    const [url, setUrl] = useState<string>(product ? product.pictureUrl : '') 
    const [careType, setCareType] = useState<string>(product ? product.careType.join(', ') : '') 
    const [size, setSize] = useState<number>(product ? product.size : 0) 
    const [barcode, setBarcode] = useState<number>(product ? product.barcode : 0) 
    const [manufacturer, setManufacturer] = useState<string>(product ? product.manufacturer : '') 
    const [brand, setBrand] = useState<string>(product ? product.brand : '') 
    const [description, setDescription] = useState<string>(product ? product.description : '') 
    const [price, setPrice] = useState<number>(product ? product.price : 0) 
    const [sizeType, setSizeType] = useState<'weight' | 'volume'>(product ? product.sizeType : 'volume')

    const changeHandler = (event: React.FormEvent) => {
        event.preventDefault()

        setIsValidate(true)

        const inputs: any = document.querySelectorAll('.form input')
        for (let input of inputs) {
            if (!input.value) {
                input.classList.add('error')
                input.nextElementSibling?.classList.add('error')
                setIsValidate(false)
            }
        }
        if (!isValidate) return

        const newProduct: IProduct = {
            pictureUrl: url.trim(),
            name: name.trim(),
            careType: careType.split(','),
            size,
            barcode,
            manufacturer: manufacturer.trim(),
            brand: brand.trim(),
            description: description.trim(),
            price,
            sizeType
        }

        if (!product) {
            setProducts((products: IProduct[]) => [...products, newProduct])
        } else {
            setProducts((products: IProduct[]) => products.map((prod: IProduct) => {
                if (prod.barcode === product.barcode) {
                    prod = newProduct
                }
    
                return prod
            }))
        }

        onClick()
    }

    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        const input = event.target

        if (!input.value) {
            input.classList.add('error')
            input.nextElementSibling?.classList.add('error')
        }
    }

    const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        const input = event.target

        input.select()
        input.classList.remove('error')
        input.nextElementSibling?.classList.remove('error')
    }

    return (
        <div className="form-container">
            <form onSubmit={changeHandler} className="form">
                <div className="form__header">
                    <h2 className="form__title">Заполните форму</h2>
                </div>

                <div className="form__content">
                    <div className="form__item">
                        <label className='form__label'>Название</label>
                        <MyInput 
                            className='form__input'
                            type='text'
                            valueProp={name}
                            onChange={value => setName(value)}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                        <small>Обязательное поле для заполнения</small>
                    </div>
                    <div className="form__item">
                        <label className='form__label'>URL картинки</label>
                        <MyInput 
                            className='form__input'
                            type='text'
                            valueProp={url}
                            onChange={value => setUrl(value)}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                        <small>Обязательное поле для заполнения</small>
                    </div>
                    <div className="form__item">
                        <label className='form__label'>Тип (через запятую)</label>
                        <MyInput 
                            className='form__input'
                            type='text'
                            valueProp={careType}
                            onChange={value => setCareType(value)}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                        <small>Обязательное поле для заполнения</small>
                    </div>
                    <div className="form__item form__item_select">
                        <label className='form__label'>Тип размера</label>
                        <MySelect 
                            className='form__select'
                            value={sizeType}
                            onChange={value => setSizeType(value)}
                            options={[{name: 'Вес', value: 'weight'}, {name: 'Обьем', value: 'volume'}]}
                        />
                    </div>
                    <div className="form__item">
                        <label className='form__label'>Размер</label>
                        <MyInput 
                            className='form__input'
                            type='number'
                            valueProp={size}
                            onChange={value => setSize(+value)}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                        <small>Обязательное поле для заполнения</small>
                    </div>
                    <div className="form__item">
                        <label className='form__label'>Штрихкод</label>
                        <MyInput 
                            className='form__input'
                            type='number'
                            valueProp={barcode}
                            onChange={value => setBarcode(+value)}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                        <small>Обязательное поле для заполнения</small>
                    </div>
                    <div className="form__item">
                        <label className='form__label'>Производитель</label>
                        <MyInput 
                            className='form__input'
                            type='text'
                            valueProp={manufacturer}
                            onChange={value => setManufacturer(value)}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                        <small>Обязательное поле для заполнения</small>
                    </div>
                    <div className="form__item">
                        <label className='form__label'>Бренд</label>
                        <MyInput 
                            className='form__input'
                            type='text'
                            valueProp={brand}
                            onChange={value => setBrand(value)}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                        <small>Обязательное поле для заполнения</small>
                    </div>
                    <div className="form__item">
                        <label className='form__label'>Описание</label>
                        <MyInput 
                            className='form__input'
                            type='text'
                            valueProp={description}
                            onChange={value => setDescription(value)}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                        <small>Обязательное поле для заполнения</small>
                    </div>
                    <div className="form__item">
                        <label className='form__label'>Цена</label>
                        <MyInput 
                            className='form__input'
                            type='number'
                            valueProp={price}
                            onChange={value => setPrice(+value)}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                        <small>Обязательное поле для заполнения</small>
                    </div>
                </div>

                <MyButton className='form__button'>{product ? 'Изменить' : 'Создать'}</MyButton>
                <button className='form__close-button' onClick={() => onClick()}>
                    <img src={closeIcon} alt="Закрыть" />
                </button>
            </form>
        </div>
    )
}

export default MyForm