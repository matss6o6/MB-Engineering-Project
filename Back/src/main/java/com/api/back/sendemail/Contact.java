package com.api.back.sendemail;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Contact {
    private String nameusername;
    private String userMailAddress;
    private String messageTitle;
    private String description;
}
