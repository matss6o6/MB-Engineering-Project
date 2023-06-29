package com.api.back.Service.ShoppingCart.DTO;

import com.api.back.Service.ShoppingCart.Enum.ProductType;
import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddShoppingCartItemDTO {
    private String login;
    private Long productId;
    private String productType;
}
