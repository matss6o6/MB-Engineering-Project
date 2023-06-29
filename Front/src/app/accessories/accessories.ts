import {ProductType} from "../shopping-cart/shopping-cart-item";

export interface Accessories {
  idAkcesoria: number;
  typ: string;
  marka: string;
  cena: number;
  opis: string;
  img: string;
  productType: ProductType;
}
