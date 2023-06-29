package com.api.back.model;
import com.api.back.dto.UserDto;
import com.api.back.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "user")
@AllArgsConstructor
@Data
@Builder
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long idKlienta;
    private String dane;
    private String email;
    private String login;
    private String haslo;
    private String adres;
    private String data_zalozenia= String.valueOf(LocalDate.now());
    private String nazwiskoMatka;
    private int numerTel;
    @Enumerated(EnumType.STRING)
    private UserRole userRole;
    @OneToOne
    private ShoppingCart shoppingCart = new ShoppingCart();

    public static User of(User user, ShoppingCart shoppingCart){
        return User.builder()
                .dane(user.getDane())
                .email(user.getEmail())
                .login(user.getLogin())
                .haslo(user.getHaslo())
                .adres(user.getAdres())
                .data_zalozenia(String.valueOf(LocalDate.now()))
                .nazwiskoMatka(user.getNazwiskoMatka())
                .numerTel(user.getNumerTel())
                .shoppingCart(shoppingCart)
                .userRole(UserRole.USER)
                .build();
    }

}