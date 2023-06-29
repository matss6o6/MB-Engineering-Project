package com.api.back;

import com.api.back.model.ShoppingCart;
import com.api.back.model.User;
import com.api.back.repo.ShoppingCartRepo;
import com.api.back.repo.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class RegisterController {

    private final UserRepo userRepo;
    private final ShoppingCartRepo shoppingCartRepo;

    @PostMapping("/user")
    public ResponseEntity<String> registerUser(@RequestBody User userDto) {
        ShoppingCart shoppingCart = shoppingCartRepo.save(ShoppingCart.emptyShoppingCart());
        User user = userRepo.save(User.of(userDto, shoppingCart));
        shoppingCart.setUser(user);
        shoppingCartRepo.save(shoppingCart);
        return ResponseEntity.ok(user.getLogin());
    }
}

