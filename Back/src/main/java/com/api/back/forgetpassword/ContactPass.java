package com.api.back.forgetpassword;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContactPass {
    private String login;
    private String mothername;
    private String email;
}
