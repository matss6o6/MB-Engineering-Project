package com.api.back.exception;

public class OrdersNotFoundException extends RuntimeException {

    public OrdersNotFoundException(String message) {
        super(message);
    }
}
