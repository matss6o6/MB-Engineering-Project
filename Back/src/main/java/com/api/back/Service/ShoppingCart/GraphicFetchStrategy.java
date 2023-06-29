package com.api.back.Service.ShoppingCart;

import com.api.back.Service.ShoppingCart.Enum.ProductType;
import com.api.back.model.Graphic;
import com.api.back.repo.GraphicRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class GraphicFetchStrategy implements FetchDataStrategy<Graphic> {

    private final GraphicRepo graphicRepo;

    public Graphic fetch(Long itemId) {
        return graphicRepo.findById(itemId)
                .orElseThrow(() -> new IllegalArgumentException(String.format("Nie znaleziono %s o id: '%d'", ProductType.GRAPHIC, itemId)));
    }

}
