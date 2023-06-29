package com.api.back.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
@Entity
@Table(name = "ShoppingCart")
@AllArgsConstructor
@Data
@Builder
@NoArgsConstructor
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    @OneToMany(fetch = FetchType.EAGER)
    private List<ShoppingCartItem> shoppingCartItems = List.of();
    @OneToOne
    private User user;

    public static ShoppingCart emptyShoppingCart(){
        return ShoppingCart.builder()
                .build();
    }
}
