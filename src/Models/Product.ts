type Product = {
    title: string;
    price: number;
}
const data: Product[] = [
    {title: 'Product 1', price: 10},
    {title: 'Product 2', price: 20},
    {title: 'Product 3', price: 30},
    {title: 'Product 4', price: 40},
]

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getPriceFromMax: (price: number): Product[] => {
        return data.filter(product => product.price >= price);
    }
}