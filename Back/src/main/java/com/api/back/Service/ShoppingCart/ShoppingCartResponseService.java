package com.api.back.Service.ShoppingCart;

import com.api.back.Service.ProductsMapperService;
import com.api.back.Service.ShoppingCart.DTO.ShoppingCartItemDto;
import com.api.back.repo.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ShoppingCartResponseService {

    private final UserRepo userRepo;
    private final ProductsMapperService productsService;

    public List<ShoppingCartItemDto> getChart(String login){
        return userRepo.findByLogin(login)
                .getShoppingCart()
                .getShoppingCartItems()
                .stream()
                .map(productsService::mapItem)
                .collect(Collectors.toList());
    }
}
