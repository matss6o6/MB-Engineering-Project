import {ProductType} from "../shopping-cart/shopping-cart-item";

export interface Disc {
  idTwarde: number;
  model: string;
  pojemnosc: string;
  cena: number;
  interfejs: string;
  podczytu: string;
  pzapisu: string;
  img: string;
  productType: ProductType;
}
