package com.api.back.repo;

import com.api.back.model.ShoppingCartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ShoppingCartItemRepo extends JpaRepository<ShoppingCartItem,Long> {
}
