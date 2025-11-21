package com.example.payout.repository;

import com.example.payout.model.PayoutRequest;
import com.example.payout.model.PayoutStatus;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

/**
 * Spring Data JPA repository for PayoutRequest entities.
 * Provides basic CRUD operations and custom queries with locking support.
 */
@Repository
public interface PayoutRequestRepository extends JpaRepository<PayoutRequest, UUID> {

    /**
     * Find a payout request by ID.
     * Inherited from JpaRepository: findById(UUID id): Optional<PayoutRequest>
     */

    /**
     * Find a payout request by ID and status.
     * Useful for validating state before updates.
     */
    Optional<PayoutRequest> findByIdAndStatus(UUID id, PayoutStatus status);

    /**
     * Find a payout request by ID with pessimistic write lock.
     * This ensures exclusive access during concurrent updates,
     * preventing race conditions when transitioning from PENDING to PROCESSING.
     *
     * Use this in transactional methods to guarantee only one user can
     * change a request's state at a time.
     */
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT p FROM PayoutRequest p WHERE p.id = :id")
    Optional<PayoutRequest> findByIdWithLock(@Param("id") UUID id);
}
