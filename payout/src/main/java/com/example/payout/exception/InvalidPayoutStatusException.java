package com.example.payout.exception;

/**
 * Exception thrown when a payout request is in an invalid state for the requested operation.
 */
public class InvalidPayoutStatusException extends RuntimeException {

    public InvalidPayoutStatusException(String message) {
        super(message);
    }
}
