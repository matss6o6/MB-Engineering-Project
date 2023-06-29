package com.api.back.Service.ShoppingCart;

import com.api.back.Service.ShoppingCart.Enum.ProductType;
import com.api.back.model.Procesors;
import com.api.back.repo.ProcesorsRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ProcessorsFetchStrategy implements FetchDataStrategy<Procesors> {
    private final ProcesorsRepo procesorsRepo;

    public Procesors fetch(Long itemId) {
        return procesorsRepo.findById(itemId)
                .orElseThrow(() -> new IllegalArgumentException(String.format("Nie znaleziono %s o id: '%d'", ProductType.ACCESSORIE, itemId)));
    }
}
