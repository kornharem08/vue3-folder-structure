// types.ts

export interface Product {
    id: string;
    name: string;
    data: ProductData | null;
  }
  
  export interface ProductData {
    [key: string]: string | number | null;
  }
  