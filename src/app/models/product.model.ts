export interface Category{
    id: string,
    name: string
}

export interface Product{
    id: string,
    images: string[],
    // image: '',
    title: string,
    category: Category,
    price: number,
    description: string
}