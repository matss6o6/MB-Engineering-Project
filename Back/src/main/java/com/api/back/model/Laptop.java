package com.api.back.model;

import com.api.back.Service.ShoppingCart.Enum.ProductType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Laptop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long idLaptopa;
    private String marka;
    private String procesor;
    private String kGraficzna;
    private String system;
    private String typEkranu;
    private String dTwardy;
    private float cena;
    private String img;
    @Enumerated(EnumType.STRING)
    private ProductType productType;
}