package com.api.back.Service.ShoppingCart;

import com.api.back.Service.ShoppingCart.DTO.AddShoppingCartItemDTO;
import com.api.back.Service.ShoppingCart.Enum.ProductType;
import com.api.back.model.ShoppingCart;
import com.api.back.model.ShoppingCartItem;
import com.api.back.model.User;
import com.api.back.repo.ShoppingCartItemRepo;
import com.api.back.repo.ShoppingCartRepo;
import com.api.back.repo.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class ShoppingCartService {
    private final ShoppingCartRepo shoppingCartRepo;
    private final ShoppingCartItemRepo shoppingCartItemRepo;
    private final UserRepo userRepo;

    public void addItemToShoppingCart(AddShoppingCartItemDTO addShoppingCartItemDTO) {
        User user = userRepo.findByLogin(addShoppingCartItemDTO.getLogin());
        ShoppingCart shoppingCart = user.getShoppingCart();

        Optional<ShoppingCartItem> shoppingCartItem = shoppingCart.getShoppingCartItems()
                .stream()
                .filter(item -> item.getProductId().equals(addShoppingCartItemDTO.getProductId()) &&
                        item.getProductType().equals(ProductType.instaceFromDB(addShoppingCartItemDTO.getProductType())))
                .findAny();
        if(shoppingCartItem.isPresent()){
            shoppingCartItem.get().setQuantity(shoppingCartItem.get().getQuantity() + 1);
            shoppingCartItemRepo.save(shoppingCartItem.get());
        }
        else{
            ShoppingCartItem savedShoppingCartItem = shoppingCartItemRepo.save(ShoppingCartItem.of(addShoppingCartItemDTO, shoppingCart));
            shoppingCart.getShoppingCartItems().add(savedShoppingCartItem);
            shoppingCartRepo.save(shoppingCart);
        }
    }

    public void removeItemFromChart(Long shoppingCartItemId){
        ShoppingCartItem shoppingCartItem = shoppingCartItemRepo.findById(shoppingCartItemId)
                .orElseThrow(() -> new IllegalArgumentException(String.format("nie znaleziono produktu w koszuku o id: '%d'",shoppingCartItemId)));
        if(shoppingCartItem.getQuantity() > 1){
            shoppingCartItem.setQuantity(shoppingCartItem.getQuantity()-1);
            shoppingCartItemRepo.save(shoppingCartItem);
        }
        else{
            ShoppingCart shoppingCart = shoppingCartItem.getShoppingCart();
            shoppingCart.getShoppingCartItems().remove(shoppingCartItem);
            shoppingCartRepo.save(shoppingCart);
            shoppingCartItemRepo.delete(shoppingCartItem);
        }
    }

    public void removeAllItemsFromChart(Long shoppingCartId){
        ShoppingCart shoppingCart = shoppingCartRepo.findById(shoppingCartId)
                .orElseThrow(() -> new IllegalArgumentException("nie znaleziono koszyka o id: " + shoppingCartId));
        List<ShoppingCartItem> shoppingCartItemList = shoppingCart.getShoppingCartItems();
        shoppingCart.setShoppingCartItems(Collections.emptyList());
        shoppingCartRepo.save(shoppingCart);
        shoppingCartItemRepo.deleteAll(shoppingCartItemList);
    }
}

