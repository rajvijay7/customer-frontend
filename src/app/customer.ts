import { Product } from "./product";

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  mobile: number;
  products: Product;
}
