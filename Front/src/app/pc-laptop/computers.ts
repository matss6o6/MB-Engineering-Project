import {ProductType} from "../shopping-cart/shopping-cart-item";

export interface Computers {
  idKomputera: number;
  model: string;
  system: string;
  procesor: string;
  kgraficzna: string;
  pamRam: string;
  cena: number;
  img: string;
  productType: ProductType;
}
