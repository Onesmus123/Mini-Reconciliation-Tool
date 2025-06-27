// Compare transactions from internal and provider sources
export function reconcileTransactions(internal, provider) {
  // Map each transaction by reference for quick lookup
  const internalMap = new Map(internal.map(tx => [tx.transaction_reference, tx]));
  const providerMap = new Map(provider.map(tx => [tx.transaction_reference, tx]));

  const matched = [];       // Found in both, compared
  const internalOnly = [];  // Found only in internal data
  const providerOnly = [];  // Found only in provider data

  // Loop through internal transactions and check for matches
  for (let [ref, intTx] of internalMap.entries()) {
    const provTx = providerMap.get(ref);

    if (provTx) {
      // Compare and add to matched list
      matched.push({
        ...intTx,
        amount_match: intTx.amount === provTx.amount,
        status_match: intTx.status === provTx.status,
        provider_amount: provTx.amount,
        provider_status: provTx.status
      });
      providerMap.delete(ref); // Remove matched entry from provider map
    } else {
      // Internal entry not found in provider
      internalOnly.push(intTx);
    }
  }

  // Remaining provider entries are unmatched
  providerMap.forEach(tx => providerOnly.push(tx));

  return { matched, internalOnly, providerOnly };
}
