package com.api.back;
import com.api.back.enums.UserRole;
import com.api.back.model.User;
import com.api.back.repo.UserRepo;
import lombok.Builder;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserRepo userRepo;


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User userData){
        User user=userRepo.findByLogin(userData.getLogin());
        if(user.getHaslo().equals(userData.getHaslo()))
            return ResponseEntity.ok(UserDto.builder().userRole(user.getUserRole()).login(user.getLogin()).haslo(user.getHaslo()).build());
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }
    @GetMapping("/{login}")
    public com.api.back.dto.UserDto getUserDetails(@PathVariable String login){
       return com.api.back.dto.UserDto.of(userRepo.findByLogin(login));
    }
    @GetMapping("/all")
    public List<com.api.back.dto.UserDto> getAllUsers(){
        return userRepo.findAll().stream().map(com.api.back.dto.UserDto::of ).collect(Collectors.toList());
    }
    @Transactional
    @DeleteMapping("/delete/{idKlienta}")
    public void deleteUser(@PathVariable Long idKlienta){

    }

    @Builder
    @Data
    static class UserDto{
        private String login;
        private String haslo;
        private UserRole userRole;
    }

}