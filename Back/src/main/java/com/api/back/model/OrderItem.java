package com.api.back.model;

import com.api.back.Service.ShoppingCart.Enum.ProductType;
import com.api.back.dto.AddOrderDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long idPrzedmiotuZamowienia;
    private Long przedmiotId;
    private Integer quantity;
    @Enumerated(EnumType.STRING)
    private ProductType productType;
    @ManyToOne
    private Orders order;

    public static OrderItem of(Orders order, AddOrderDto.OrderItem orderItem){
        return OrderItem.builder()
                .order(order)
                .przedmiotId(orderItem.getProductId())
                .quantity(orderItem.getQuantity())
                .productType(orderItem.getProductType())
                .build();
    }
}
