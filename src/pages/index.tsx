import { useState } from "react";
import { GetServerSideProps } from "next";
import AddCompanyModal from '../components/AddCompanyModal';

interface Order {
  orderId: number;
  customerName: string;
  amount: string;
  status: string;
}

interface Company {
  name: string;
  logo: string;
  orders: Order[];
}

const sampleOrders = {
  daraz: [
    {
      orderId: 101,
      customerName: "Alice",
      amount: "$120",
      status: "Delivered",
    },
    { orderId: 102, customerName: "Bob", amount: "$85", status: "Shipped" },
    { orderId: 103, customerName: "Cathy", amount: "$150", status: "Pending" },
    {
      orderId: 104,
      customerName: "Daniel",
      amount: "$200",
      status: "Cancelled",
    },
    { orderId: 105, customerName: "Eva", amount: "$95", status: "Delivered" },
    {
      orderId: 106,
      customerName: "Frank",
      amount: "$50",
      status: "In Transit",
    },
    { orderId: 107, customerName: "Grace", amount: "$120", status: "Shipped" },
    { orderId: 108, customerName: "Hank", amount: "$300", status: "Delivered" },
    { orderId: 109, customerName: "Ivy", amount: "$130", status: "Pending" },
    { orderId: 110, customerName: "Jack", amount: "$180", status: "Delivered" },
    { orderId: 111, customerName: "Ken", amount: "$140", status: "In Transit" },
    { orderId: 112, customerName: "Lily", amount: "$160", status: "Shipped" },
    { orderId: 113, customerName: "Mia", amount: "$90", status: "Delivered" },
    { orderId: 114, customerName: "Nina", amount: "$110", status: "Cancelled" },
    { orderId: 115, customerName: "Oscar", amount: "$220", status: "Shipped" },
    {
      orderId: 116,
      customerName: "Paul",
      amount: "$210",
      status: "In Transit",
    },
    {
      orderId: 117,
      customerName: "Quincy",
      amount: "$100",
      status: "Delivered",
    },
    { orderId: 118, customerName: "Rachel", amount: "$80", status: "Pending" },
    { orderId: 119, customerName: "Sam", amount: "$75", status: "Delivered" },
    { orderId: 120, customerName: "Tom", amount: "$250", status: "Shipped" },
    { orderId: 121, customerName: "Uma", amount: "$120", status: "Delivered" },
    { orderId: 122, customerName: "Vera", amount: "$145", status: "Pending" },
    { orderId: 123, customerName: "Will", amount: "$230", status: "Cancelled" },
    {
      orderId: 124,
      customerName: "Xander",
      amount: "$260",
      status: "In Transit",
    },
    { orderId: 125, customerName: "Yara", amount: "$160", status: "Shipped" },
    { orderId: 126, customerName: "Zoe", amount: "$200", status: "Delivered" },
    { orderId: 127, customerName: "Ava", amount: "$95", status: "Pending" },
    { orderId: 128, customerName: "Ben", amount: "$55", status: "Delivered" },
    { orderId: 129, customerName: "Clara", amount: "$220", status: "Shipped" },
    {
      orderId: 130,
      customerName: "David",
      amount: "$180",
      status: "In Transit",
    },
  ],
  foodpanda: [
    {
      orderId: 201,
      customerName: "Charlie",
      amount: "$50",
      status: "Delivered",
    },
    { orderId: 202, customerName: "David", amount: "$25", status: "Preparing" },
    { orderId: 203, customerName: "Irene", amount: "$45", status: "Cancelled" },
    { orderId: 204, customerName: "James", amount: "$70", status: "Shipped" },
    { orderId: 205, customerName: "Kim", amount: "$30", status: "Delivered" },
    { orderId: 206, customerName: "Larry", amount: "$85", status: "Pending" },
    { orderId: 207, customerName: "Mona", amount: "$60", status: "Delivered" },
    { orderId: 208, customerName: "Nate", amount: "$90", status: "In Transit" },
    {
      orderId: 209,
      customerName: "Olivia",
      amount: "$110",
      status: "Delivered",
    },
    { orderId: 210, customerName: "Paul", amount: "$135", status: "Cancelled" },
    { orderId: 211, customerName: "Quincy", amount: "$100", status: "Shipped" },
    {
      orderId: 212,
      customerName: "Rachel",
      amount: "$65",
      status: "Delivered",
    },
    { orderId: 213, customerName: "Steve", amount: "$180", status: "Pending" },
    { orderId: 214, customerName: "Tom", amount: "$50", status: "Delivered" },
    { orderId: 215, customerName: "Uma", amount: "$70", status: "Shipped" },
    { orderId: 216, customerName: "Vera", amount: "$40", status: "Delivered" },
    { orderId: 217, customerName: "Will", amount: "$85", status: "In Transit" },
    {
      orderId: 218,
      customerName: "Xander",
      amount: "$95",
      status: "Cancelled",
    },
    { orderId: 219, customerName: "Yara", amount: "$75", status: "Shipped" },
    { orderId: 220, customerName: "Zoe", amount: "$110", status: "Delivered" },
    { orderId: 221, customerName: "Alex", amount: "$50", status: "Pending" },
    {
      orderId: 222,
      customerName: "Beth",
      amount: "$125",
      status: "In Transit",
    },
    { orderId: 223, customerName: "Carl", amount: "$135", status: "Delivered" },
    { orderId: 224, customerName: "Dana", amount: "$60", status: "Shipped" },
    { orderId: 225, customerName: "Eve", amount: "$150", status: "Cancelled" },
    { orderId: 226, customerName: "Fay", amount: "$75", status: "Delivered" },
    { orderId: 227, customerName: "Gil", amount: "$60", status: "In Transit" },
    { orderId: 228, customerName: "Holly", amount: "$90", status: "Pending" },
  ],
  amazon: [
    { orderId: 301, customerName: "Eve", amount: "$200", status: "In Transit" },
    { orderId: 302, customerName: "Frank", amount: "$150", status: "Pending" },
    {
      orderId: 303,
      customerName: "Olivia",
      amount: "$300",
      status: "Delivered",
    },
    { orderId: 304, customerName: "Paul", amount: "$250", status: "Cancelled" },
    {
      orderId: 305,
      customerName: "Quinn",
      amount: "$180",
      status: "Delivered",
    },
    { orderId: 306, customerName: "Rachel", amount: "$90", status: "Shipped" },
    {
      orderId: 307,
      customerName: "Steve",
      amount: "$120",
      status: "Delivered",
    },
    { orderId: 308, customerName: "Tina", amount: "$400", status: "Pending" },
    { orderId: 309, customerName: "Uma", amount: "$75", status: "Delivered" },
    { orderId: 310, customerName: "Vera", amount: "$220", status: "Shipped" },
    {
      orderId: 311,
      customerName: "Will",
      amount: "$150",
      status: "In Transit",
    },
    {
      orderId: 312,
      customerName: "Xander",
      amount: "$250",
      status: "Delivered",
    },
    { orderId: 313, customerName: "Yara", amount: "$175", status: "Cancelled" },
    { orderId: 314, customerName: "Zoe", amount: "$280", status: "Pending" },
    { orderId: 315, customerName: "Ava", amount: "$100", status: "Shipped" },
    { orderId: 316, customerName: "Ben", amount: "$160", status: "In Transit" },
    {
      orderId: 317,
      customerName: "Clara",
      amount: "$220",
      status: "Delivered",
    },
    {
      orderId: 318,
      customerName: "David",
      amount: "$180",
      status: "Cancelled",
    },
    { orderId: 319, customerName: "Emma", amount: "$90", status: "Delivered" },
    { orderId: 320, customerName: "Fred", amount: "$125", status: "Shipped" },
    {
      orderId: 321,
      customerName: "Gina",
      amount: "$105",
      status: "In Transit",
    },
    { orderId: 322, customerName: "Hank", amount: "$240", status: "Delivered" },
    { orderId: 323, customerName: "Ivy", amount: "$130", status: "Pending" },
    { orderId: 324, customerName: "Jack", amount: "$100", status: "Shipped" },
    { orderId: 325, customerName: "Kim", amount: "$90", status: "Delivered" },
  ],
};

const companies: Record<string, Company> = {
  daraz: {
    name: "Daraz",
    logo: "/daraz-logo.png",
    orders: sampleOrders.daraz,
  },
  foodpanda: {
    name: "FoodPanda",
    logo: "/foodpanda-logo.png",
    orders: sampleOrders.foodpanda,
  },
  amazon: {
    name: "Amazon",
    logo: "/amazon-logo.png",
    orders: sampleOrders.amazon,
  },
};

// Add new interfaces for sorting
type SortDirection = "asc" | "desc";

interface SortConfig {
  key: keyof Order;
  direction: SortDirection;
}

interface HomeProps {
  company: Company;
  subdomain: string;
}

export default function Home({ company, subdomain }: HomeProps) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "orderId",
    direction: "asc",
  });

  // Add pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  // Sorting function
  const sortedOrders = [...company.orders].sort((a, b) => {
    if (sortConfig.key === "amount") {
      // Remove '$' and convert to number for amount sorting
      const amountA = parseFloat(a[sortConfig.key].replace("$", ""));
      const amountB = parseFloat(b[sortConfig.key].replace("$", ""));
      return sortConfig.direction === "asc"
        ? amountA - amountB
        : amountB - amountA;
    }

    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(sortedOrders.length / ordersPerPage);

  // Pagination controls
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle column header click
  const handleSort = (key: keyof Order) => {
    setSortConfig((currentSort) => ({
      key,
      direction:
        currentSort.key === key && currentSort.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  // Get sort indicator
  const getSortIndicator = (key: keyof Order) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? " ↑" : " ↓";
    }
    return "";
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCompany = async (companyData: CompanyFormData) => {
    try {
      // Here you would typically make an API call to create the company
      console.log('Creating new company:', companyData);
      
      // Example API call:
      // const response = await fetch('/api/companies', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(companyData)
      // });
      
      // Close modal after successful creation
      setIsModalOpen(false);
      
      // You might want to show a success message
      alert(`Company ${companyData.name} created successfully!`);
    } catch (error) {
      console.error('Error creating company:', error);
      alert('Failed to create company. Please try again.');
    }
  };

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="container">
      <div className="top-bar">
        <div className="logo-section">
          <div className="main-logo">
            <span className="logo-text">Order</span>
            <span className="logo-text-accent">Made</span>
          </div>
        </div>
        <button 
          className="add-company-btn"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="icon">+</span>
          Add New Company
        </button>
      </div>

      <div className="content-section">
        <div className="company-header">
          <div className="company-info">
            <div className="company-logo-text">
              {company.name.charAt(0)}
            </div>
            <h1>{company.name} Orders</h1>
          </div>
          <div className="order-stats">
            <div className="stat-item">
              <span className="stat-value">{sortedOrders.length}</span>
              <span className="stat-label">Total Orders</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">
                {
                  sortedOrders.filter((order) => order.status === "Delivered")
                    .length
                }
              </span>
              <span className="stat-label">Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">
                {
                  sortedOrders.filter((order) => order.status === "Pending")
                    .length
                }
              </span>
              <span className="stat-label">Pending</span>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort("orderId")} className="sortable">
                  Order ID{getSortIndicator("orderId")}
                </th>
                <th
                  onClick={() => handleSort("customerName")}
                  className="sortable"
                >
                  Customer{getSortIndicator("customerName")}
                </th>
                <th onClick={() => handleSort("amount")} className="sortable">
                  Amount{getSortIndicator("amount")}
                </th>
                <th onClick={() => handleSort("status")} className="sortable">
                  Status{getSortIndicator("status")}
                </th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr key={order.orderId}>
                  <td>#{order.orderId}</td>
                  <td>{order.customerName}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span
                      className={`status-badge ${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>

          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`pagination-button ${
                    currentPage === number ? "active" : ""
                  }`}
                >
                  {number}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </div>

        <div className="pagination-info">
          Showing {indexOfFirstOrder + 1} to{" "}
          {Math.min(indexOfLastOrder, sortedOrders.length)} of{" "}
          {sortedOrders.length} orders
        </div>
      </div>

      <AddCompanyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCompany}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const hostname = req.headers.host || "";

  let subdomain;
  if (process.env.NODE_ENV === "development") {
    const url = new URL(req.url || "", `http://${hostname}`);
    subdomain = url.searchParams.get("company") || "daraz";
  } else {
    subdomain = hostname.split(".")[0];
  }

  const company = companies[subdomain];

  if (!company) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      company,
      subdomain,
    },
  };
};
