package com.api.back.Service.ShoppingCart;

import com.api.back.Service.ShoppingCart.Enum.ProductType;
import com.api.back.model.Ram;
import com.api.back.repo.RamRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class RamFetchStrategy implements FetchDataStrategy<Ram> {

    private final RamRepo ramRepo;

    public Ram fetch(Long itemId) {
        return ramRepo.findById(itemId)
                .orElseThrow(() -> new IllegalArgumentException(String.format("Nie znaleziono %s o id: '%d'", ProductType.RAM, itemId)));
    }
}
