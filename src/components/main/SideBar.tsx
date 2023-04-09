import React, { useContext, useEffect, useState } from 'react'
import MyInput from '../UI/MyInput'
import searchIcon from 'D:/Курсы/shop/src/icons/search.svg'
import { IProduct } from '../../interfaces/IProduct'
import arrowDownFillIcon from 'D:/Курсы/shop/src/icons/arrow_down_fill.svg'
import deleteIcon from 'D:/Курсы/shop/src/icons/delete.svg'
import SortCareType from './SortCareType'
import MyButton from '../UI/MyButton'
import { IFilterParams } from '../../interfaces/IFilterParams'
import arrowTopIcon from 'D:/Курсы/shop/src/icons/arrow-top.svg'
import arrowDownIcon from 'D:/Курсы/shop/src/icons/arrow-down_black.svg'
import { useWindowResize } from '../../hooks/useWindowResize'
import { Context } from '../../context'
import MyForm from './Form'
import MyLogin from '../UI/MyLogin'
import { useSortParams, useDisableBody, useManufacturers } from '../../hooks/useSideBar'
import MyPriceInput from '../UI/MyPriceInput'

interface SideBarParams {
    onClick: (value: string) => void
    selected: string
    showClick: (value: IFilterParams) => void
}

function SideBar({onClick, selected, showClick}: SideBarParams) {
    const {products, isAdmin, setIsAdmin} = useContext(Context)
    const windowWidth = useWindowResize()

    const [isShowAll, setIsShowAll] = useState<boolean>(false)
    const [isShowForm, setIsShowForm] = useState<boolean>(false)
    const [isShowParams, setIsShowParams] = useState<boolean>(false)
    const [isShowLoginForm, setIsShowLoginForm] = useState<boolean>(false)

    const [minPrice, setMinPrice] = useState<number>(0)
    const [maxPrice, setMaxPrice] = useState<number>(10000)
    const [manufacturersSort, setManufacturersSort] = useState<string[]>([])
    const sortParams = useSortParams(minPrice, maxPrice, manufacturersSort)

    const manufacturers = useManufacturers(products)
    const [sortedManufacturers, setSortedManufacturers] = useState<string[]>(manufacturers)

    const [search, setSearch] = useState<string>('')

    const createParams = () => {
        showClick(sortParams!)
    }

    const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value

        if (manufacturersSort.includes(value)) {
            event.currentTarget.removeAttribute('checked')
            event.currentTarget.classList.remove('checked')
            setManufacturersSort(manufacturersSort.filter(manufacturer => manufacturer !== value))
            return
        }

        event.currentTarget.setAttribute('checked', '')
        event.currentTarget.classList.add('checked')
        setManufacturersSort(prev => [...prev, value])
    }

    const searchParamsHandler = () => {
        setSortedManufacturers([...manufacturers].filter(manufacturer => manufacturer.toLowerCase().includes(search.toLowerCase().trim())))
    }

    const resetParamsHandler = () => {
        setMinPrice(0)
        setMaxPrice(10000)
        setManufacturersSort([])

        const checkList = Array.from(document.querySelectorAll('.side-bar__manufacturer-list input'))

        for (let input of checkList) {
            input.removeAttribute('checked')
            input.classList.remove('checked')
        }

        setSortedManufacturers(manufacturers)
        setSortedManufacturers(sortedManufacturers => sortedManufacturers.sort((a:string , b: string) => a.localeCompare(b)))
    }

    useEffect(() => {
        if (!sortedManufacturers.length) {
            setSortedManufacturers(manufacturers)
        }

        setSortedManufacturers(manufacturers
            .filter(sort => products.filter((product: IProduct) => product.manufacturer === sort).length !== 0)
            .sort((a:string , b: string) => a.localeCompare(b))
        ) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products, manufacturers])

    useDisableBody(isShowForm)

    return (
        <div className="side-bar">
            <div className="side-bar__header">
                <h2 className="side-bar__title">Подбор по параметрам</h2>
                <button 
                    className="side-bar__arrow-button"
                    onClick={() => setIsShowParams(!isShowParams)}
                >
                    <img src={isShowParams ? arrowDownIcon : arrowTopIcon} alt="" />
                </button>
            </div>

            {(windowWidth > 963 || !isShowParams) &&
                <>
                    <div className="side-bar__sort-price">
                        <h3 className="side-bar__price-title">Цена <span>₸</span></h3>

                        <div className="side-bar__price-inputs">
                            <MyPriceInput
                                className='side-bar__price-input'
                                value={minPrice}
                                onChange={event => setMinPrice(+event.target.value)}
                            />
                            <div className="side-bar__price-between">-</div>
                            <MyPriceInput
                                className='side-bar__price-input'
                                value={maxPrice}
                                onChange={event => setMaxPrice(+event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="side-bar__manufacturer-search-container">
                        <h3 className="side-bar__manufacturer-title">Производитель</h3>
                        <div className="side-bar__input-container">
                            <MyInput 
                                testid='search-manufacturer-input'
                                className='side-bar__manufacturer-search'
                                placeholder='Поиск...'
                                type='text'
                                valueProp={search}
                                onChange={value => setSearch(value)}
                            />
                            <MyButton testid='search-manufacturer-btn' className="side-bar__input-button" onClick={searchParamsHandler}>
                                <img src={searchIcon} alt="" />
                            </MyButton>
                        </div>
                    </div>

                    <div data-testid='manufacturer-list' className="side-bar__manufacturer-list">
                        {sortedManufacturers.length
                            ?
                                <>
                                    {sortedManufacturers.map((manufacturer, index) => (
                                        <p data-testid={`manufacturer-${manufacturer}`} key={manufacturer} className={!isShowAll && index >= 4 ? "check-input-hide" : ''}>
                                            <input 
                                                type="checkbox" 
                                                value={manufacturer}
                                                onChange={checkHandler}
                                            />
                                            {manufacturer}<span> ({products.filter((product: IProduct) => product.manufacturer === manufacturer).length})</span> 
                                        </p>
                                    ))}
                                    {sortedManufacturers.length > 4 &&
                                        <>
                                            {isShowAll 
                                                ? <button onClick={() => setIsShowAll(false)}>Скрыть</button>
                                                : <button onClick={() => setIsShowAll(true)}>Показать всё <img src={arrowDownFillIcon} alt="" /></button>
                                            }
                                        </>
                                    }
                                </>
                            : <h3>Ничего не найдено</h3> 
                        }
                    </div>

                    <div className="side-bar__buttons-container">
                        <MyButton onClick={createParams} className='side-bar__button side-bar__button_show'>Показать</MyButton>
                        <MyButton onClick={resetParamsHandler} className='side-bar__button side-bar__button_delete'>
                            <img src={deleteIcon} alt="" />
                        </MyButton>
                    </div>
                </>
            }
                
            {(windowWidth > 963 || isShowParams) &&
                <div className="side-bar__care-type-list">
                    <h3 className="side-bar__care-type-title">Тип товара</h3>
                    <SortCareType 
                        paretClassName='side-bar'
                        onClick={onClick}
                        selected={selected}
                    />
                </div>
            }
            {isAdmin 
                ? 
                <>
                    <MyButton testid='show-form-btn' onClick={() => setIsShowForm(true)} className="side-bar__control-button">Создать товар</MyButton>
                    <MyButton testid='log-out-btn' onClick={() => setIsAdmin(false)} className="side-bar__control-button">Выйти</MyButton>
                </>
                : <MyButton testid='login-modal-btn' onClick={() => setIsShowLoginForm(true)} className="side-bar__control-button">Войти</MyButton>
            }
            {isShowLoginForm &&
                <MyLogin onClick={() => setIsShowLoginForm(false)}/>
            }
            {isShowForm && 
                <MyForm onClick={() => setIsShowForm(false)}/>
            }
        </div>
    )
}

export default SideBar