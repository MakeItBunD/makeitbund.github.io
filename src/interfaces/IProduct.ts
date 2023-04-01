type productSizeType = 'weight' | 'volume'

export interface IProduct {
    pictureUrl: string,
    name: string,
    careType: string[],
    sizeType: productSizeType,
    size: number,
    barcode: number,
    manufacturer: string,
    brand: string,
    description: string,
    price: number
    count?: number
}