package com.api.back.Service.ShoppingCart.Enum;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ProductType {
    ACCESSORIE("ACCESSORIE"),
    COMPUTER("COMPUTER"),
    DISC("DISC"),
    GRAPHIC("GRAPHIC"),
    LAPTOP("LAPTOP"),
    PROCESOR("PROCESOR"),
    RAM("RAM");


    private String databaseName;

    public static ProductType instaceFromDB(String name){
        switch (name){
            case "ACCESSORIE" -> {return ProductType.ACCESSORIE;}
            case "COMPUTER" -> {return ProductType.COMPUTER;}
            case "DISC" -> {return ProductType.DISC;}
            case "GRAPHIC" -> {return ProductType.GRAPHIC;}
            case "LAPTOP" -> {return ProductType.LAPTOP;}
            case "PROCESOR" -> {return ProductType.PROCESOR;}
            case "RAM" -> {return ProductType.RAM;}
            default -> throw new IllegalArgumentException("Wrong db name of productType");
        }
    }
}
