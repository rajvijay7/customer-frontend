import { Product } from "./product";

export class Customer {

  id: number=0;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  address: string | undefined;
  mobile: number | undefined;
  products: Product | undefined;

}
