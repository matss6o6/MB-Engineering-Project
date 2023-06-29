package com.api.back.dto;

import com.api.back.Service.ShoppingCart.Enum.ProductType;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter
@Setter
public class AddOrderDto {
    private String uzytkownik;
    private String nameAndSurname;
    private String street;
    private String phoneNumber;
    private String email;
    private List<OrderItem> items;

    @Builder
    @Getter
    @Setter
    public static class OrderItem {
        private Long productId;
        private ProductType productType;
        private Integer quantity;
        private float price;
        private String name;
    }
}
