export type Tproduct = {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: string;
    quanty: number;
    created_at: Date;
    updated_at: Date
}

export type TproductCart = {
    id: number;
    photo: string;
    name: string;
    description: string;
    quantyProduct: number;
    price: string;
    quanty: number;
    created_at: Date;
    updated_at: Date
}