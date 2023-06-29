package com.api.back.model;

import com.api.back.Service.ShoppingCart.DTO.AddShoppingCartItemDTO;
import com.api.back.Service.ShoppingCart.Enum.ProductType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Table(name = "shoppingCartItem")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class ShoppingCartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    @ManyToOne
    private ShoppingCart shoppingCart;
    private Long productId;
    @Enumerated(EnumType.STRING)
    private ProductType productType;
    private Integer quantity;

    public static ShoppingCartItem of(AddShoppingCartItemDTO shoppingCartItemDto, ShoppingCart shoppingCart) {
        ShoppingCartItem shoppingCartItem = new ShoppingCartItem();
        shoppingCartItem.setQuantity(1);
        shoppingCartItem.setProductId(shoppingCartItemDto.getProductId());
        shoppingCartItem.setProductType(ProductType.instaceFromDB(shoppingCartItemDto.getProductType()));
        shoppingCartItem.setShoppingCart(shoppingCart);
        return shoppingCartItem;
    }
}
