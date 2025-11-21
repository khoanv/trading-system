package com.example.payout.dto;

import com.example.payout.model.PayoutRequest;
import com.example.payout.model.PayoutStatus;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

/**
 * Response DTO for payout request operations.
 */
public class PayoutRequestResponse {

    private UUID id;
    private UUID vendorId;
    private BigDecimal amount;
    private String payoutCurrency;
    private PayoutStatus status;
    private Instant requestedAt;
    private Instant updatedAt;

    // Default constructor
    public PayoutRequestResponse() {
    }

    // Full constructor
    public PayoutRequestResponse(UUID id, UUID vendorId, BigDecimal amount,
                                 String payoutCurrency, PayoutStatus status,
                                 Instant requestedAt, Instant updatedAt) {
        this.id = id;
        this.vendorId = vendorId;
        this.amount = amount;
        this.payoutCurrency = payoutCurrency;
        this.status = status;
        this.requestedAt = requestedAt;
        this.updatedAt = updatedAt;
    }

    /**
     * Convert entity to response DTO.
     */
    public static PayoutRequestResponse from(PayoutRequest entity) {
        return new PayoutRequestResponse(
                entity.getId(),
                entity.getVendorId(),
                entity.getAmount(),
                entity.getPayoutCurrency(),
                entity.getStatus(),
                entity.getRequestedAt(),
                entity.getUpdatedAt()
        );
    }

    // Getters and Setters
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getVendorId() {
        return vendorId;
    }

    public void setVendorId(UUID vendorId) {
        this.vendorId = vendorId;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getPayoutCurrency() {
        return payoutCurrency;
    }

    public void setPayoutCurrency(String payoutCurrency) {
        this.payoutCurrency = payoutCurrency;
    }

    public PayoutStatus getStatus() {
        return status;
    }

    public void setStatus(PayoutStatus status) {
        this.status = status;
    }

    public Instant getRequestedAt() {
        return requestedAt;
    }

    public void setRequestedAt(Instant requestedAt) {
        this.requestedAt = requestedAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }
}
