package com.api.back.Service.ShoppingCart.shoppingCartItemMapper;
import com.api.back.Service.ShoppingCart.DTO.ShoppingCartItemDto;
import com.api.back.model.Computers;
import com.api.back.model.OrderItem;
import com.api.back.model.Procesors;
import com.api.back.model.ShoppingCartItem;


public class ComputerMapper {
    public static ShoppingCartItemDto map(Computers item, ShoppingCartItem cartItem){
        return ShoppingCartItemDto.builder()
                .name(item.getModel())
                .productId(cartItem.getProductId())
                .price(item.getCena())
                .id(cartItem.getId())
                .quantity(cartItem.getQuantity())
                .productType(cartItem.getProductType())
                .build();
    }

    public static ShoppingCartItemDto map(Computers item, OrderItem cartItem){
        return ShoppingCartItemDto.builder()
                .name(item.getModel())
                .productId(cartItem.getPrzedmiotId())
                .price(item.getCena())
                .id(cartItem.getIdPrzedmiotuZamowienia())
                .quantity(cartItem.getQuantity())
                .productType(cartItem.getProductType())
                .build();
    }
}