package com.api.back.Service.ShoppingCart;


public interface FetchDataStrategy<T> {
    T fetch(Long itemId);
}
