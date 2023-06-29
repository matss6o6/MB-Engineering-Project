package com.api.back.forgetpassword;

import com.api.back.forgetpassword.service.ContactPassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/forgetpass")
public class ContactPassController {

    @Autowired
    ContactPassService contactPassService;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public ResponseEntity postContact(@RequestBody ContactPass contactPass){
        try{
            contactPassService.sendPass(contactPass);
            return ResponseEntity.ok().body("Mail has been send!");
        }
        catch (MailException e){
            return ResponseEntity.badRequest().body("Mail hasn't been send!");
        }
    }
}
