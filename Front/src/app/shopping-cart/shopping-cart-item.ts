export interface ShoppingCartItem{
  id: number;
  name: string;
  price: number;
  quantity: number;
  productType: ProductType;
  productId: number;
}
export enum ProductType{
  ACCESSORIE="ACCESSORIE",COMPUTER="COMPUTER",DISC="DISC",GRAPHIC="GRAPHIC",LAPTOP="LAPTOP",PROCESOR="PROCESOR",RAM="RAM"
}
export interface AddShoppingCartItemDTO{
  login: string;
  productId: number;
  productType: ProductType;
}
