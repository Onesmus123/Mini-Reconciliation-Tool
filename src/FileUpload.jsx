import React from 'react';
import Papa from 'papaparse';

// File upload component for parsing CSVs
function FileUpload({ onDataParsed }) {
  // Parse uploaded CSV file and pass data to parent
  const handleFile = (e, fileType) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        onDataParsed(fileType, results.data);
      },
    });
  };

  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      {/* Input for internal CSV */}
      <div>
        <label><strong>Internal CSV</strong></label><br />
        <input type="file" accept=".csv" onChange={(e) => handleFile(e, 'internal')} />
      </div>

      {/* Input for provider CSV */}
      <div>
        <label><strong>Provider CSV</strong></label><br />
        <input type="file" accept=".csv" onChange={(e) => handleFile(e, 'provider')} />
      </div>
    </div>
  );
}

export default FileUpload;
