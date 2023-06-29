import {ProductType} from "../shopping-cart/shopping-cart-item";

export interface Procesors {
  idProcesora: number;
  model: string;
  gprocesora: string;
  cena: number;
  taktowanie: string;
  lrdzeni: string;
  cache: string;
  img: string;
  productType: ProductType;
}
