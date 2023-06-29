package com.api.back.model;

import com.api.back.dto.AddOrderDto;
import com.api.back.enums.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long idZamowienia;
    private String uzytkownik;
    private String nameAndSurname;
    private String street;
    private String phoneNumber;
    private String numer_zamowienia;
    @Enumerated(EnumType.STRING)
    private OrderStatus status_zam;
    private String email;
    @OneToMany
    private List<OrderItem> orderItems;

    public static Orders of(AddOrderDto addOrderDto){
        return Orders.builder()
                .uzytkownik(addOrderDto.getUzytkownik())
                .nameAndSurname(addOrderDto.getNameAndSurname())
                .street(addOrderDto.getStreet())
                .phoneNumber(addOrderDto.getPhoneNumber())
                .email(addOrderDto.getEmail())
                .numer_zamowienia(UUID.randomUUID() + ".PL")
                .status_zam(OrderStatus.OCZEKIWANIE_NA_PLATNOSC)
                .build();
    }
}
