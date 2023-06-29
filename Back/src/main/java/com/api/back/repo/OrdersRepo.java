package com.api.back.repo;

import com.api.back.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrdersRepo extends JpaRepository<Orders, Long> {
    Optional<Orders> findOrdersByIdZamowienia(Long idZamowienia);

    void deleteOrdersByIdZamowienia(Long IdZamowienia);
}
