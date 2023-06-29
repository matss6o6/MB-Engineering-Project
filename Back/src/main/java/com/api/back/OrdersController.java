package com.api.back;

import com.api.back.Service.OrdersService;
import com.api.back.dto.AddOrderDto;
import com.api.back.dto.OrderDto;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/orders")
public class OrdersController {
    private final OrdersService ordersService;

    @GetMapping("/all")
    public List<OrderDto> getAllOrders() {
        return ordersService.findOrders();
    }

    @GetMapping("/find/{idZamowienia}")
    public OrderDto getOrdersByIdZamowienia(@PathVariable Long idZamowienia) {
        return ordersService.findOrdersByIdZamowienia(idZamowienia);
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public void addOrders(@RequestBody AddOrderDto addOrderDto) {
        ordersService.addOrders(addOrderDto);
    }

    @PutMapping("/upgrade/{idZamowienia}")
    public void upgradeOrder(@PathVariable Long idZamowienia) {
        ordersService.upgradeOrder(idZamowienia);
    }

    @PutMapping("/downgrade/{idZamowienia}")
    public void downgradeOrder(@PathVariable Long idZamowienia) {
        ordersService.downgradeOrder(idZamowienia);
    }

    @Transactional
    @DeleteMapping("/delete/{idZamowienia}")
    public void deleteOrders(@PathVariable Long idZamowienia) {
        ordersService.deleteOrders(idZamowienia);
    }
}

