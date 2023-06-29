package com.api.back.model;

import com.api.back.Service.ShoppingCart.Enum.ProductType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Computers implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long idKomputera;
    private String model;
    private String system;
    private String procesor;
    private String kGraficzna;
    private String pamRam;
    private int cena;
    private String img;
    @Enumerated(EnumType.STRING)
    private ProductType productType;
}

