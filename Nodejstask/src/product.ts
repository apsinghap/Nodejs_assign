export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export let products: Product[] = [
    { id: 1, name: 'Product 1', price: 20.99 },
    { id: 2, name: 'Product 2', price: 17.99 },
  ];
  