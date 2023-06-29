package com.api.back.Service;

import com.api.back.Service.ShoppingCart.ShoppingCartService;
import com.api.back.dto.AddOrderDto;
import com.api.back.dto.OrderDto;
import com.api.back.enums.OrderStatus;
import com.api.back.exception.OrdersNotFoundException;
import com.api.back.model.OrderItem;
import com.api.back.model.Orders;
import com.api.back.model.ShoppingCartItem;
import com.api.back.model.User;
import com.api.back.repo.OrderItemRepo;
import com.api.back.repo.OrdersRepo;
import com.api.back.repo.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrdersService {
    private final OrdersRepo ordersRepo;
    private final OrderItemRepo orderItemRepo;
    private final UserRepo userRepo;
    private final ShoppingCartService shoppingCartService;
    private final ProductsMapperService productsMapperService;
    private final OrdersMailerService ordersMailerService;

    private final static String OERDER_NOT_FOUND = "Zamowienia by id %s was not found";

    public void addOrders(AddOrderDto addOrderDto) {
        Orders order = ordersRepo.save(Orders.of(addOrderDto));
        List<OrderItem> orderItems = addOrderDto.getItems()
                .stream()
                .map(item -> orderItemRepo.save(OrderItem.of(order, item)))
                .collect(Collectors.toList());
        order.setOrderItems(orderItems);
        Orders savedOrder = ordersRepo.save(order);
        removeItemsFromChart(addOrderDto.getUzytkownik());
        ordersMailerService.sendOdrderToCustomer(addOrderDto, savedOrder.getNumer_zamowienia());
    }

    public List<OrderDto> findOrders() {
        return ordersRepo.findAll()
                .stream()
                .map(this::mapOrder)
                .collect(Collectors.toList());
    }

    public OrderDto findOrdersByIdZamowienia(Long idZamowienia) {
        return ordersRepo.findOrdersByIdZamowienia(idZamowienia)
                .map(this::mapOrder)
                .orElseThrow(() -> new OrdersNotFoundException(String.format(OERDER_NOT_FOUND, idZamowienia)));
    }

    public void upgradeOrder(Long idZamowienia){
        Orders order = ordersRepo.findById(idZamowienia)
                .orElseThrow(() -> new OrdersNotFoundException(String.format(OERDER_NOT_FOUND, idZamowienia)));
        order.setStatus_zam(OrderStatus.upgarde(order.getStatus_zam()));
        ordersRepo.save(order);
    }

    public void downgradeOrder(Long idZamowienia){
        Orders order = ordersRepo.findById(idZamowienia)
                .orElseThrow(() -> new OrdersNotFoundException(String.format(OERDER_NOT_FOUND, idZamowienia)));
        order.setStatus_zam(OrderStatus.downgarde(order.getStatus_zam()));
        ordersRepo.save(order);
    }

    public void deleteOrders(Long idZamowienia) {
        Orders order = ordersRepo.findById(idZamowienia)
                .orElseThrow(() -> new OrdersNotFoundException(String.format(OERDER_NOT_FOUND, idZamowienia)));
        List<OrderItem> orderItems = order.getOrderItems();
        order.setOrderItems(Collections.emptyList());
        ordersRepo.save(order);
        orderItems.forEach(orderItemRepo::delete);
        ordersRepo.delete(order);
    }

    private void removeItemsFromChart(String login){
        User user = userRepo.findByLogin(login);
        shoppingCartService.removeAllItemsFromChart(user.getShoppingCart().getId());
    }

    private OrderDto mapOrder(Orders orders) {
        return OrderDto.of(orders, orders.getOrderItems()
                .stream()
                .map(productsMapperService::mapItem)
                .collect(Collectors.toList()));
    }
}