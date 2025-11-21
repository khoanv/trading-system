package com.example.payout.dto;

/**
 * Request DTO for marking a payout request as processing.
 */
public class MarkAsProcessingRequest {

    private String processedBy;

    // Default constructor required for JSON deserialization
    public MarkAsProcessingRequest() {
    }

    public MarkAsProcessingRequest(String processedBy) {
        this.processedBy = processedBy;
    }

    public String getProcessedBy() {
        return processedBy;
    }

    public void setProcessedBy(String processedBy) {
        this.processedBy = processedBy;
    }
}
