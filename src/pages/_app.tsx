import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 20px;
          color: #000;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          background: #f5f5f5;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        .table-container {
          overflow-x: auto;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          white-space: nowrap;
        }
        th,
        td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }
        th {
          background-color: #f8f9fa;
          font-weight: 600;
        }
        tr:hover {
          background-color: #f8f9fa;
        }
        .status-badge {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.85em;
          font-weight: 500;
        }
        .delivered {
          background-color: #e6f4ea;
          color: #1e7e34;
        }
        .pending {
          background-color: #fff3cd;
          color: #856404;
        }
        .shipped,
        .in.transit {
          background-color: #cce5ff;
          color: #004085;
        }
        .cancelled {
          background-color: #f8d7da;
          color: #721c24;
        }
        .preparing {
          background-color: #e2e3e5;
          color: #383d41;
        }
        .sortable {
          cursor: pointer;
          user-select: none;
          position: relative;
        }

        .sortable:hover {
          background-color: #edf2f7;
        }

        /* Add transition for hover effect */
        th {
          transition: background-color 0.2s ease;
        }

        /* Optional: Add subtle indication that columns are sortable */
        .sortable::after {
          content: "⇅";
          position: absolute;
          right: 8px;
          opacity: 0.3;
        }

        .sortable:hover::after {
          opacity: 0.7;
        }

        /* Pagination Styles */
        .pagination {
          display: flex;
          justify-content: end;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
          padding: 20px 0;
        }

        .pagination-numbers {
          display: flex;
          gap: 5px;
        }

        .pagination-button {
          padding: 8px 12px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pagination-button:disabled {
          background: #f5f5f5;
          cursor: not-allowed;
          opacity: 0.7;
        }

        .pagination-button:hover:not(:disabled) {
          background: #f0f0f0;
          border-color: #ccc;
        }

        .pagination-button.active {
          background: #007bff;
          color: white;
          border-color: #007bff;
        }

        .pagination-info {
          text-align: end;
          color: #666;
          font-size: 0.9em;
          margin-top: 10px;
          padding-right: 16px;
        }

        /* Add margin to table container */
        .table-container {
          margin-bottom: 20px;
        }

        /* Make table header sticky */
        thead th {
          position: sticky;
          top: 0;
          background: #f8f9fa;
          z-index: 1;
        }

        /* New styles */
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background: #fff;
          border-bottom: 1px solid #eee;
          margin: -20px -20px 0;
          border-radius: 8px 8px 0 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .logo-section {
          display: flex;
          align-items: center;
        }

        .ordermade-logo {
          height: 32px;
          object-fit: contain;
        }

        .add-company-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .add-company-btn:hover {
          background: #0056b3;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .add-company-btn .icon {
          font-size: 18px;
          font-weight: bold;
        }

        .content-section {
          padding: 24px 0;
        }

        .company-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding: 24px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .company-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .company-logo {
          height: 48px;
          width: 48px;
          object-fit: contain;
          border-radius: 8px;
          padding: 8px;
          background: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .company-info h1 {
          margin: 0;
          font-size: 24px;
          color: #2d3748;
          font-weight: 600;
        }

        .order-stats {
          display: flex;
          gap: 24px;
        }

        .stat-item {
          text-align: center;
          padding: 0 16px;
          border-right: 1px solid #dee2e6;
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-value {
          display: block;
          font-size: 24px;
          font-weight: 600;
          color: #2d3748;
        }

        .stat-label {
          font-size: 14px;
          color: #718096;
        }

        /* Update existing table styles */
        .table-container {
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          margin: 0 0 24px;
          overflow: hidden;
        }

        table {
          margin: 0;
        }

        thead th {
          background: #f8f9fa;
          font-weight: 600;
          color: #4a5568;
        }

        tbody tr:hover {
          background-color: #f8f9fa;
          transition: background-color 0.2s ease;
        }

        .status-badge {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85em;
          font-weight: 500;
          text-transform: capitalize;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        /* Update pagination styles */
        .pagination {
          background: white;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .pagination-button {
          min-width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Logo Styles */
        .main-logo {
          display: flex;
          align-items: center;
          gap: 2px;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .logo-text {
          color: #2d3748;
        }

        .logo-text-accent {
          color: #007bff;
        }

        .company-logo-text {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #007bff, #00a3ff);
          color: white;
          font-size: 24px;
          font-weight: 600;
          border-radius: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-transform: uppercase;
        }

        /* Update top bar styles */
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background: #fff;
          border-bottom: 1px solid #eee;
          margin: -20px -20px 0;
          border-radius: 8px 8px 0 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        /* Update add company button */
        .add-company-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .add-company-btn:hover {
          background: #0056b3;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .add-company-btn .icon {
          font-size: 18px;
          font-weight: bold;
        }

        /* Update company header styles */
        .company-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding: 24px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .company-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .company-info h1 {
          margin: 0;
          font-size: 24px;
          color: #2d3748;
          font-weight: 600;
        }

        /* Update status badge styles */
        .status-badge {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85em;
          font-weight: 500;
          text-transform: capitalize;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .delivered {
          background-color: #dcfce7;
          color: #166534;
        }

        .pending {
          background-color: #fef9c3;
          color: #854d0e;
        }

        .shipped {
          background-color: #dbeafe;
          color: #1e40af;
        }

        .cancelled {
          background-color: #fee2e2;
          color: #991b1b;
        }

        .in.transit {
          background-color: #e0e7ff;
          color: #3730a3;
        }

        .preparing {
          background-color: #f3f4f6;
          color: #374151;
        }

        /* Add hover effects to table rows */
        tbody tr {
          transition: all 0.2s ease;
        }

        tbody tr:hover {
          background-color: #f8fafc;
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 24px;
          border-radius: 12px;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .modal-header h2 {
          margin: 0;
          color: #2d3748;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #718096;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #4a5568;
          font-weight: 500;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 16px;
        }

        .subdomain-input {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .domain-suffix {
          color: #718096;
          white-space: nowrap;
        }

        .error-message {
          color: #e53e3e;
          margin-bottom: 16px;
          font-size: 14px;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }

        .cancel-button {
          padding: 10px 20px;
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 6px;
          cursor: pointer;
        }

        .submit-button {
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .submit-button:hover {
          background: #0056b3;
        }
      `}</style>
    </>
  );
}
