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
public class Accessories {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long idAkcesoria;
    private String typ;
    private String marka;
    private float cena;
    private String opis;
    private String img;
    @Enumerated(EnumType.STRING)
    private ProductType productType;
}
