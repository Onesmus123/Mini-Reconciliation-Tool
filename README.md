# 🧾 Mini Reconciliation Tool

A simple React-based tool to compare transaction records between internal and provider CSV files.

## Features

- Upload two CSV files (Internal & Provider)
- Compare transactions by reference, amount, and status
- Highlight mismatches
- Export matched, internal-only, and provider-only results to CSV

## Usage

1. Upload both CSV files.
2. Click **Compare Transactions**.
3. View results and download CSVs.

## Tech Stack

- React + Vite
- PapaParse for CSV parsing
- FileSaver.js for CSV export

## Run Locally

```bash
npm install
npm run dev
