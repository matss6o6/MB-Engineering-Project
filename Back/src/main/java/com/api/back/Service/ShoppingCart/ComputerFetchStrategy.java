package com.api.back.Service.ShoppingCart;

import com.api.back.Service.ShoppingCart.Enum.ProductType;
import com.api.back.model.Computers;
import com.api.back.repo.ComputerRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class ComputerFetchStrategy implements FetchDataStrategy<Computers> {
    private final ComputerRepo computerRepo;

    public Computers fetch(Long itemId) {
        return computerRepo.findById(itemId)
                .orElseThrow(() -> new IllegalArgumentException(String.format("Nie znaleziono %s o id: '%d'", ProductType.COMPUTER, itemId)));
    }
}
