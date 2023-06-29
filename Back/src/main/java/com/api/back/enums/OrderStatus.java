package com.api.back.enums;

import lombok.Getter;

@Getter
public enum OrderStatus {
    OCZEKIWANIE_NA_PLATNOSC,
    ZATWIERDZENIE,
    WYSYLKA,
    ODBIOR;

    public static OrderStatus upgarde(OrderStatus orderStatus){
        switch (orderStatus){
            case OCZEKIWANIE_NA_PLATNOSC -> {return OrderStatus.ZATWIERDZENIE;}
            case ZATWIERDZENIE -> {return OrderStatus.WYSYLKA;}
            case WYSYLKA -> {return OrderStatus.ODBIOR;}
            default -> throw new IllegalArgumentException("Status zamówienia osiagnął najwyższy stopień");
        }
    }

    public static OrderStatus downgarde(OrderStatus orderStatus){
        switch (orderStatus){
            case ODBIOR -> {return OrderStatus.WYSYLKA;}
            case WYSYLKA -> {return OrderStatus.ZATWIERDZENIE;}
            case ZATWIERDZENIE -> {return OrderStatus.OCZEKIWANIE_NA_PLATNOSC;}
            default -> throw new IllegalArgumentException("Status zamówienia osiagnął najniższy stopień");
        }
    }
}
