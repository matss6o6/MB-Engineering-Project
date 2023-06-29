import {ProductType} from "../shopping-cart/shopping-cart-item";

export interface Graphic {
  idGraf: number;
  model: string;
  uklad: string;
  cena: number;
  pamiec: string;
  rpamieci: string;
  zlacza: string;
  img: string;
  productType: ProductType;
}
