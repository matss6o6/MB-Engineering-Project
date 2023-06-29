package com.api.back.dto;

import com.api.back.Service.ShoppingCart.DTO.ShoppingCartItemDto;
import com.api.back.enums.OrderStatus;
import com.api.back.model.Orders;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter
@Setter
public class OrderDto {
    private Long idZamowienia;
    private String uzytkownik;
    private String numer_zamowienia;
    private OrderStatus status_zam;
    private String email;
    private List<ShoppingCartItemDto> items;

    public static OrderDto of(Orders order, List<ShoppingCartItemDto> items) {
        return OrderDto.builder()
                .idZamowienia(order.getIdZamowienia())
                .uzytkownik(order.getUzytkownik())
                .numer_zamowienia(order.getNumer_zamowienia())
                .status_zam(order.getStatus_zam())
                .email(order.getEmail())
                .items(items)
                .build();
    }
}
