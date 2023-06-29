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
public class Disc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long idTwarde;
    private String model;


    private String pojemnosc;
    private float cena;
    private String interfejs;
    private String pOdczytu;
    private String pZapisu;
    private String img;
    @Enumerated(EnumType.STRING)
    private ProductType productType;
}