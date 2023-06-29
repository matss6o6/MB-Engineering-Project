package com.api.back.Service.ShoppingCart.DTO;

import com.api.back.Service.ShoppingCart.Enum.ProductType;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class ShoppingCartItemDto {
    private Long id;
    private Long productId;
    private String name;
    private float price;
    private Integer quantity;
    private ProductType productType;
}
