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
public class Ram {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private long idPam;
    private String model;
    private String pSkokowa;
    private float cena;
    private String rPamieci;
    private String taktowanie;
    private String opoznienie;
    private String img;
    @Enumerated(EnumType.STRING)
    private ProductType productType;
}

