import React from 'react';
import { saveAs } from 'file-saver';

// Utility to convert data to CSV and download it
function exportCSV(data, filename) {
  if (!data.length) return;

  const headers = Object.keys(data[0]);
  const rows = data.map(row => headers.map(h => row[h]).join(','));
  const csvContent = [headers.join(','), ...rows].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, `${filename}.csv`);
}

// Component to render a table of reconciliation data
function Table({ title, data, emoji }) {
  return (
    <div style={{ marginTop: 30 }}>
      <h3>{emoji} {title} ({data.length})</h3>

      {/* Export button */}
      <button onClick={() => exportCSV(data, title)}>Export CSV</button>

      {/* Scrollable table */}
      <div style={{ overflowX: 'auto' }}>
        <table border="1" cellPadding="6" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              {/* Table headers */}
              {Object.keys(data[0] || {}).map((key, i) => (
                <th key={i}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Table rows */}
            {data.map((row, idx) => (
              <tr key={idx}>
                {Object.entries(row).map(([key, val], i) => {
                  const highlight = key.includes("match") && val === false;
                  return (
                    <td key={i} style={{ background: highlight ? '#ffcccc' : 'inherit' }}>
                      {val.toString()}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Render all 3 reconciliation results
function ComparisonResult({ result }) {
  return (
    <div>
      <Table title="Matched Transactions" data={result.matched} emoji="✅" />
      <Table title="Internal Only" data={result.internalOnly} emoji="⚠️" />
      <Table title="Provider Only" data={result.providerOnly} emoji="❌" />
    </div>
  );
}

export default ComparisonResult;
