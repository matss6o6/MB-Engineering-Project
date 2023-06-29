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
public class Procesors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long idProcesora;
    private String model;
    private String gProcesora;
    private float cena;
    private String taktowanie;
    private int lRdzeni;
    private String Cache;
    private String img;
    @Enumerated(EnumType.STRING)
    private ProductType productType;
}