package com.example.payout.service;

import com.example.payout.exception.InvalidPayoutStatusException;
import com.example.payout.exception.PayoutRequestNotFoundException;
import com.example.payout.model.PayoutRequest;
import com.example.payout.model.PayoutStatus;
import com.example.payout.repository.PayoutRequestRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.UUID;

/**
 * Service layer for managing payout requests.
 * Handles business logic and ensures transactional consistency.
 */
@Service
public class PayoutRequestService {

    private final PayoutRequestRepository payoutRequestRepository;

    public PayoutRequestService(PayoutRequestRepository payoutRequestRepository) {
        this.payoutRequestRepository = payoutRequestRepository;
    }

    /**
     * Marks a payout request as PROCESSING when a finance user starts working on it.
     *
     * This method uses @Transactional with READ_COMMITTED isolation to ensure:
     * 1. Only one finance user can successfully change a given request from PENDING to PROCESSING
     * 2. Concurrent attempts are safely handled without inconsistent state
     * 3. Combined with pessimistic locking in the repository, this prevents race conditions
     *
     * The transaction boundary ensures that:
     * - The read (with lock) and write operations are atomic
     * - If two users try simultaneously, one will wait for the other's transaction to complete
     * - The second user will then see the updated status and fail validation
     *
     * @param id The UUID of the payout request
     * @param processedBy Email or identifier of the finance user processing the request
     * @return The updated PayoutRequest entity
     * @throws PayoutRequestNotFoundException if the payout request doesn't exist
     * @throws InvalidPayoutStatusException if the payout request is not in PENDING state
     */
    @Transactional(isolation = Isolation.READ_COMMITTED)
    public PayoutRequest markAsProcessing(UUID id, String processedBy) {
        // Load the payout request with a pessimistic write lock.
        // This prevents other transactions from reading or modifying this row
        // until the current transaction completes.
        PayoutRequest payoutRequest = payoutRequestRepository.findByIdWithLock(id)
                .orElseThrow(() -> new PayoutRequestNotFoundException(id));

        // Validate that the request is in PENDING state.
        // Due to the pessimistic lock, we are guaranteed that no other transaction
        // has modified this record between our read and this validation.
        if (payoutRequest.getStatus() != PayoutStatus.PENDING) {
            throw new InvalidPayoutStatusException(
                    "Payout request " + id + " is not in PENDING state. Current status: "
                            + payoutRequest.getStatus()
            );
        }

        // Update the status and timestamp.
        // The @Version field (optimistic locking) provides an additional safety layer.
        payoutRequest.setStatus(PayoutStatus.PROCESSING);
        payoutRequest.setUpdatedAt(Instant.now());

        // Save and return. The transaction commits after this method returns,
        // releasing the pessimistic lock and making the changes visible to other transactions.
        return payoutRequestRepository.save(payoutRequest);
    }

    /**
     * Find a payout request by ID (without locking).
     * Useful for read-only operations.
     */
    @Transactional(readOnly = true)
    public PayoutRequest findById(UUID id) {
        return payoutRequestRepository.findById(id)
                .orElseThrow(() -> new PayoutRequestNotFoundException(id));
    }
}
