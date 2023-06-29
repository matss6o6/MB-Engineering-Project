package com.api.back.Service.ShoppingCart;

import com.api.back.Service.ShoppingCart.Enum.ProductType;
import com.api.back.model.Disc;
import com.api.back.repo.DiscRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class DiscFetchStrategy implements FetchDataStrategy<Disc> {

    private final DiscRepo discRepo;

    public Disc fetch(Long itemId) {
        return discRepo.findById(itemId)
                .orElseThrow(() -> new IllegalArgumentException(String.format("Nie znaleziono %s o id: '%d'", ProductType.DISC, itemId)));
    }
}
