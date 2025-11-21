# Section 3 – System & API Design

## Question 3.1 – Frontend ↔ Backend Flow (8–12 sentences)

When the finance user opens the **“Open Invoices”** page, the browser triggers an SSR request to the backend to fetch the first page of open invoices, and the server returns HTML with the populated table. Once the page loads, React stores the invoice list in local state so pagination or filtering can update the UI without a full page reload. When the user clicks **“Start Processing”**, a React click handler runs and immediately sets a loading flag so the UI disables the button or shows a spinner. The handler sends a **POST** request to `/api/payouts/{id}/mark-processing` with a JSON body containing the finance user’s identifier (e.g., `{ "processedBy": "finance.user@example.com" }`). The backend controller receives this request and forwards it to the service layer.

Inside a transactional boundary, the service loads the payout record, validates that it exists and is still in the **PENDING** state, then atomically updates the status to **PROCESSING** and refreshes `updatedAt`. After committing the transaction, the controller returns the updated payout as JSON. The frontend then clears the loading state and updates the UI, either by patching the updated record in React state or by refetching the current page for more reliable synchronization. Refetching is safer because it ensures other fields—such as totals or overdue status—are also updated. If any client-side request fails, the user sees an explicit error message. Overall, the flow provides fast SSR initial rendering and responsive client-side updates for subsequent interactions.

---

## Question 3.2 – Edge Cases & Reliability

### Concurrent actions on the same record
- The backend ensures consistency by wrapping the update in a **transaction** and checking that the current status is still **PENDING** before applying any change.  
- If two users attempt to process the same payout simultaneously, the first transaction succeeds, while the second receives a **409 Conflict** due to the status no longer being valid.  
- The second user should see a clear UI message such as: *“This payout was already claimed by another user.”*  
- The frontend should then refetch the table to show the correct, updated status.

### API call failures from the frontend
**Case 1 – Backend returns 409 Conflict**  
- Show an inline error or toast indicating the payout/invoice is no longer in a valid state.  
- Do not retry automatically; instead refetch the data to ensure UI accuracy.

**Case 2 – Network error (timeout, lost connection)**  
- Show a message like: *“Network error — please try again.”*  
- Allow the user to retry manually; optional auto-retry may use exponential backoff.

### Scaling considerations
**Backend**  
- Add **indexes** on frequently filtered fields (status, vendorId, dueDate).  
- Use **cursor-based pagination** for large datasets to avoid expensive OFFSET scans.  
- Add **read replicas**, caching (e.g., Redis), or denormalised summary tables for heavy workloads.  
- Move heavy or asynchronous operations to **message queues**.

**Frontend**  
- Use **debounced search** to avoid excessive API calls.  
- Implement **server-side pagination** or infinite scrolling for large invoice datasets.  
- Add background **refetching** or stale-while-revalidate patterns for a smoother real-time experience.
