package com.example.payout.exception;

import java.util.UUID;

/**
 * Exception thrown when a payout request is not found.
 */
public class PayoutRequestNotFoundException extends RuntimeException {

    public PayoutRequestNotFoundException(UUID id) {
        super("Payout request not found with id: " + id);
    }
}
