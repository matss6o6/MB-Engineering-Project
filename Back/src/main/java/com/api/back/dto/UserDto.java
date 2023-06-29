package com.api.back.dto;

import com.api.back.model.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class UserDto {
    private Long idKlienta;
    private String dane;
    private String email;
    private String login;
    private String haslo;
    private String nazwiskoMatka;

    public static UserDto of(User user){
        return UserDto.builder()
                .dane(user.getDane())
                .email(user.getEmail())
                .login(user.getLogin())
                .haslo(user.getHaslo())
                .nazwiskoMatka(user.getNazwiskoMatka())
                .build();

    }
}
