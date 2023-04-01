import BasketPage from "../pages/BasketPage"
import CardProductPage from "../pages/CardProductPage"
import CatalogPage from "../pages/СatalogPage"

export const routes = [
    {path: '/catalog', element: CatalogPage},
    {path: '/basket', element: BasketPage},
    {path: '/catalog/product/:barcode', element: CardProductPage}
]