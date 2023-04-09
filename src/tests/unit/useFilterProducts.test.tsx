import { renderHook } from '@testing-library/react'
import { useFilterProducts } from "../../hooks/useFilterProducts";
import { IProduct } from "../../interfaces/IProduct";

const products: IProduct[] = [
    {
        pictureUrl: "https://4fresh.ru/upload/resize_cache/iblock/386/440_440_1/3868eea57de3a13b0a69d9c7f237dfee.jpg",
        name: "Гель для душа \"Удовое дерево и сандал\", восстанавливающий 4fresh BEAUTY",
        careType: ["Уход за телом"],
        sizeType: "volume",
        size: 250,
        barcode: 4859374057384,
        manufacturer: "Russia",
        brand: "4fresh BEAUTY",
        description: "Восстанавливающий гель для душа 4fresh BEAUTY - это особенно мягкое очищение кожи и потрясающий глубокий древесно-восточный аромат, который погружает вас в состояние баланса и спокойствия. Натуральные мягкие ПАВы из кокосового масла и глюкозы не нарушают естественный липидный барьер, а высокое содержание альгината из бурых водорослей дарит чувство увлажненности и комфорта. Содержащееся в составе эфирное масло сандала смягчает и успокаивает кожу, а Витамин Е обеспечивает антиоксидантный эффект. Подходит и для мужчин, и для женщин.",
        price: 377
    },
    {
        pictureUrl: "https://4fresh.ru/upload/resize_cache/iblock/272/440_440_1/2728dab06863a2dfea7ef7d938e105f4.jpg",
        name: "Гель для душа \"Органический Инжир\", для чувствительной кожи Coslys",
        careType: ["Уход за руками"],
        sizeType: "volume",
        size: 1000,
        barcode: 3849567403854,
        manufacturer: "France",
        brand: "Coslys",
        description: "100% натуральный нежный гель для душа с мягкими моющими веществами растительного происхождения бережно очищает кожу и обладает оптимальным уровнем pH. Органический экстракт инжира защищает её от внешних воздействий, а экстракт корня цикория делает кожу мягкой и гладкой. Натуральность и безопасность продукта подтверждена международным стандартом COSMOS ORGANIC.",
        price: 1823
    }
]

describe('USE FILTER PRODUCTS TESTS' ,() => {
    test('useFilterProducts should return empty Array with empty params',() => {
        //act
        const { result } = renderHook(() => useFilterProducts([], '', null))
        
        //assert
        expect(result.current!.length).toBe(0)
    })

    test('useFilterProducts should return 1 object from 2',() => {
        //act
        const { result } = renderHook(() => useFilterProducts(products, 'Уход за телом', null))
    
        //assert
        expect(result.current!.length).toBe(1)
    })

    test('useFilterProducts should return same Array',() => {
        //act
        const { result } = renderHook(() => useFilterProducts(products, '', null))
    
        //assert
        expect(result.current).toEqual(products)
    })
})