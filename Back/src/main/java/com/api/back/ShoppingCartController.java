package com.api.back;

import com.api.back.Service.ShoppingCart.DTO.AddShoppingCartItemDTO;
import com.api.back.Service.ShoppingCart.DTO.ShoppingCartItemDto;
import com.api.back.Service.ShoppingCart.ShoppingCartResponseService;
import com.api.back.Service.ShoppingCart.ShoppingCartService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/shopping-cart")
public class ShoppingCartController {

    private final ShoppingCartService shoppingCartService;
    private final ShoppingCartResponseService shoppingCartResponseService;

    @PostMapping("/add-item")
    public void addItemToChart(@RequestBody AddShoppingCartItemDTO addShoppingCartItemDTO){
        shoppingCartService.addItemToShoppingCart(addShoppingCartItemDTO);
    }

    @DeleteMapping("/{shoppingCartItemId}")
    public void removeItemFromChart(@PathVariable Long shoppingCartItemId){
        shoppingCartService.removeItemFromChart(shoppingCartItemId);
    }

    @GetMapping("/{userLogin}")
    public List<ShoppingCartItemDto> getChart(@PathVariable String userLogin){
        return shoppingCartResponseService.getChart(userLogin);
    }

}
