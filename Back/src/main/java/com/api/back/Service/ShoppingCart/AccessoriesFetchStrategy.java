package com.api.back.Service.ShoppingCart;

import com.api.back.Service.ShoppingCart.Enum.ProductType;
import com.api.back.model.Accessories;
import com.api.back.repo.AccessoriesRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class AccessoriesFetchStrategy implements FetchDataStrategy<Accessories> {

    private final AccessoriesRepo accessoriesRepo;

    public Accessories fetch(Long itemId) {
        return accessoriesRepo.findById(itemId)
                .orElseThrow(() -> new IllegalArgumentException(String.format("Nie znaleziono %s o id: '%d'", ProductType.ACCESSORIE, itemId)));
    }
}
