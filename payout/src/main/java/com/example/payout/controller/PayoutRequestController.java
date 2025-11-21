package com.example.payout.controller;

import com.example.payout.dto.ErrorResponse;
import com.example.payout.dto.MarkAsProcessingRequest;
import com.example.payout.dto.PayoutRequestResponse;
import com.example.payout.exception.InvalidPayoutStatusException;
import com.example.payout.exception.PayoutRequestNotFoundException;
import com.example.payout.model.PayoutRequest;
import com.example.payout.service.PayoutRequestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

/**
 * REST controller for payout request operations.
 * Handles HTTP requests for finance team to manage payout requests.
 */
@RestController
@RequestMapping("/api/payouts")
public class PayoutRequestController {

    private final PayoutRequestService payoutRequestService;

    public PayoutRequestController(PayoutRequestService payoutRequestService) {
        this.payoutRequestService = payoutRequestService;
    }

    /**
     * Endpoint for finance users to mark a payout request as PROCESSING.
     *
     * This endpoint ensures safe concurrent access:
     * - Only one finance user can successfully transition a request from PENDING to PROCESSING
     * - Returns 409 Conflict if the request is already being processed or has been paid
     * - Returns 404 Not Found if the request doesn't exist
     *
     * @param id UUID of the payout request
     * @param request Contains the processedBy field (finance user's email)
     * @return 200 OK with updated payout request, 404 if not found, 409 if invalid state
     */
    @PostMapping("/{id}/mark-processing")
    public ResponseEntity<PayoutRequestResponse> markAsProcessing(
            @PathVariable UUID id,
            @RequestBody MarkAsProcessingRequest request) {

        PayoutRequest updatedRequest = payoutRequestService.markAsProcessing(id, request.getProcessedBy());
        return ResponseEntity.ok(PayoutRequestResponse.from(updatedRequest));
    }

    /**
     * Global exception handler for PayoutRequestNotFoundException.
     * Returns 404 Not Found with error details.
     */
    @ExceptionHandler(PayoutRequestNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(PayoutRequestNotFoundException ex) {
        ErrorResponse errorResponse = new ErrorResponse(
                "Not Found",
                ex.getMessage() != null ? ex.getMessage() : "Payout request not found"
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }

    /**
     * Global exception handler for InvalidPayoutStatusException.
     * Returns 409 Conflict with error details.
     */
    @ExceptionHandler(InvalidPayoutStatusException.class)
    public ResponseEntity<ErrorResponse> handleInvalidStatus(InvalidPayoutStatusException ex) {
        ErrorResponse errorResponse = new ErrorResponse(
                "Conflict",
                ex.getMessage() != null ? ex.getMessage() : "Invalid payout request status"
        );
        return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse);
    }
}
