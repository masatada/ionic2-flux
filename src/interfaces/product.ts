export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface ProductInStock extends Product {
  inventory: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}
