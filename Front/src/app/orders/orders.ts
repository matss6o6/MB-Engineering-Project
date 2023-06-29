import {ProductType} from "../shopping-cart/shopping-cart-item";

export interface Orders{
  idZamowienia: number;
  uzytkownik: string;
  numer_zamowienia: string;
  status_zam: StatusOrder;
  email: string;
  items: OrderItem[];
}
export interface AddOrder{
  uzytkownik: string;
  nameAndSurname: string;
  street: string;
  phoneNumber: string;
  email: string;
  items: OrderItem[]
}
export interface OrderItem{
  productId: number;
  productType: ProductType;
  quantity: number;
  price: number;
  name: string;
}
export enum StatusOrder{
  OCZEKIWANIE_NA_PLATNOSC="OCZEKIWANIE_NA_PLATNOSC",
  ZATWIERDZENIE ="ZATWIERDZENIE",
  WYSYLKA="WYSYLKA",
  ODBIOR="ODBIOR"
}
