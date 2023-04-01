import React from "react";
import MySelect from "../UI/MySelect";

interface SortHeaderProps {
    sortValue: string
    diaValue: string
    onChangeSort: (value: string) => void
    onChangeDiarection: (value: string) => void
}

function SortHeader({sortValue, diaValue, onChangeSort, onChangeDiarection}: SortHeaderProps) {
    return (
        <div className="sort-header">
            <h1 className="sort-header__title">Косметика и гигиена</h1>
            <div className="sort-header__sort">
                <label className="sort-header__label">Сортировка:</label>
                <MySelect 
                    className="sort-header__select"
                    value={sortValue}
                    onChange={onChangeSort}
                    options={[{name: 'Название', value: 'name'}, {name: 'Цена', value: 'price'}]}
                />

                <MySelect 
                    className="sort-header__select"
                    value={diaValue}
                    onChange={onChangeDiarection}
                    options={[{name: 'По убыванию', value: 'firstHigh'}, {name: 'По возрастанию', value: 'firstLow'}]}
                />
            </div>
        </div>
    )
}

export default SortHeader