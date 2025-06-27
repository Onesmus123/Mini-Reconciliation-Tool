import React, { useState } from 'react';
import FileUpload from './FileUpload.jsx';
import ComparisonResult from './ComparisonResult.jsx';
import { reconcileTransactions } from './utils.js';
import './App.css';

function App() {
  // Store parsed data from internal and provider CSVs
  const [internalData, setInternalData] = useState([]);
  const [providerData, setProviderData] = useState([]);

  // Store reconciliation results after comparison
  const [result, setResult] = useState(null);

  // Callback to update internal or provider data when files are uploaded
  const handleDataParsed = (type, data) => {
    if (type === 'internal') setInternalData(data);
    else if (type === 'provider') setProviderData(data);
  };

  // Compare the two datasets using custom logic and store the result
  const handleCompare = () => {
    if (internalData.length === 0 || providerData.length === 0) {
      alert("Please upload both files first.");
      return;
    }
    const output = reconcileTransactions(internalData, providerData);
    setResult(output);
  };

  return (
    <div className="App" style={{ maxWidth: 900, margin: 'auto', padding: 20 }}>
      <h1>🧾 Mini Reconciliation Tool</h1>

      {/* File upload component */}
      <FileUpload onDataParsed={handleDataParsed} />

      {/* Compare button */}
      <button onClick={handleCompare} style={{ marginTop: 20 }}>
        Compare Transactions
      </button>

      {/* Render results if available */}
      {result && <ComparisonResult result={result} />}
    </div>
  );
}

export default App;
