import React, { useContext, useState } from 'react'
import ProductsList from '../components/main/ProductsList'
import SideBar from '../components/main/SideBar'
import SortCareType from '../components/main/SortCareType'
import SortHeader from '../components/main/SortHeader'
import MyRoutesMap from '../components/UI/MyRoutesMap'
import { IFilterParams } from '../interfaces/IFilterParams'
import { useWindowResize } from '../hooks/useWindowResize'
import MyBackButton from '../components/UI/MyBackButton'
import { useFilterProducts } from '../hooks/useFilterProducts'
import { useSortProducts } from '../hooks/useSortProducts'
import { Context } from '../context'

function CatalogPage() {
    const links = [
        {name: 'Главная', path: '/main'},
        {name: 'Косметика и гигиена', path: '/catalog'}
    ]

    const windowWidth = useWindowResize()

    const [selectedSort, setSelectedSort] = useState<string>('name')
    const [selectedDiarection, setSelectedDiarection] = useState<string>('firstHigh')
    const [selectedCare, setSelectedCare] = useState<string>('')
    const [filterParams, setFilterParams] = useState<IFilterParams | null>(null)

    const {products} = useContext(Context)
    const filtredProducts = useFilterProducts(products, selectedCare, filterParams)
    const sortedProducts = useSortProducts(filtredProducts!, selectedSort, selectedDiarection)

    const productsFilter = (value: string) => {
        if (selectedCare === value) {
            setSelectedCare('')
            return
        }

        setSelectedCare(value)
    }

    return (
        <div className="catalog">
            <div className="container">
                {windowWidth > 963
                    ? <MyRoutesMap routesMap={links}/>
                    : <MyBackButton routesMap={links}/>
                }
                <SortHeader
                    sortValue={selectedSort}
                    diaValue={selectedDiarection}
                    onChangeSort={sort => setSelectedSort(sort)}
                    onChangeDiarection={dia => setSelectedDiarection(dia)}
                />
                <SortCareType 
                    paretClassName='catalog'
                    onClick={productsFilter}
                    selected={selectedCare}
                />
                <div className="catalog__content">
                    <SideBar 
                        showClick={params => setFilterParams(params)}
                        onClick={productsFilter}
                        selected={selectedCare}
                    />
                    <ProductsList products={sortedProducts!}/>
                </div>
            </div>
        </div>
    )
}

export default CatalogPage