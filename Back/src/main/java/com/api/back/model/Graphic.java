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
public class Graphic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long idGraf;
    private String model;
    private String uklad;
    private float cena;
    private String pamiec;
    private String rPamieci;
    private String zlacza;
    private String img;
    @Enumerated(EnumType.STRING)
    private ProductType productType;
}
