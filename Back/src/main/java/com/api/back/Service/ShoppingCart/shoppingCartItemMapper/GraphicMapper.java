package com.api.back.Service.ShoppingCart.shoppingCartItemMapper;
import com.api.back.Service.ShoppingCart.DTO.ShoppingCartItemDto;
import com.api.back.model.Computers;
import com.api.back.model.Graphic;
import com.api.back.model.OrderItem;
import com.api.back.model.ShoppingCartItem;

public class GraphicMapper {
    public static ShoppingCartItemDto map(Graphic item, ShoppingCartItem cartItem){
        return ShoppingCartItemDto.builder()
                .name(item.getModel())
                .price(item.getCena())
                .productId(cartItem.getProductId())
                .id(cartItem.getId())
                .quantity(cartItem.getQuantity())
                .productType(cartItem.getProductType())
                .build();
    }

    public static ShoppingCartItemDto map(Graphic item, OrderItem cartItem){
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