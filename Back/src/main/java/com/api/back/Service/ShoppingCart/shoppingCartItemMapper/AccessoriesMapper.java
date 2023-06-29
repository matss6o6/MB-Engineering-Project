package com.api.back.Service.ShoppingCart.shoppingCartItemMapper;

import com.api.back.Service.ShoppingCart.DTO.ShoppingCartItemDto;
import com.api.back.model.Accessories;
import com.api.back.model.OrderItem;
import com.api.back.model.ShoppingCartItem;

public class AccessoriesMapper{

    public static ShoppingCartItemDto map(Accessories item, ShoppingCartItem cartItem){
        return ShoppingCartItemDto.builder()
                .name(item.getTyp())
                .productId(cartItem.getProductId())
                .price(item.getCena())
                .id(cartItem.getId())
                .quantity(cartItem.getQuantity())
                .productType(cartItem.getProductType())
                .build();
    }

    public static ShoppingCartItemDto map(Accessories item, OrderItem cartItem){
        return ShoppingCartItemDto.builder()
                .name(item.getTyp())
                .productId(cartItem.getPrzedmiotId())
                .price(item.getCena())
                .id(cartItem.getIdPrzedmiotuZamowienia())
                .quantity(cartItem.getQuantity())
                .productType(cartItem.getProductType())
                .build();
    }
}
