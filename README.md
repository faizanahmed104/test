# OrderMade - White Label Order Management Platform

OrderMade is a white-label order management platform that allows companies to access their orders through their own branded subdomains.

## Features

- **Dynamic Subdomain Support**
  - Each company gets their own subdomain (e.g., daraz.ordermade.com)
  - Custom branding per subdomain

- **Order Management**
  - View and manage orders in a clean, intuitive interface
  - Sort orders by ID, Customer, Amount, or Status
  - Pagination with 10 orders per page
  - Status tracking with visual indicators

- **Dashboard Analytics**
  - Total orders count
  - Delivered orders count
  - Pending orders count

- **Company Onboarding**
  - Easy company registration through modal
  - Subdomain validation
  - Admin email setup

## Tech Stack

- Next.js
- TypeScript
- CSS-in-JS (styled-jsx)

## Getting Started

### Prerequisites

- Node.js 14+ 
- npm or yarn

### Installation

1. Clone the repository:


## Features in Detail

### 1. Dynamic Subdomains
- Production: Uses actual subdomains (e.g., company.ordermade.com)
- Development: Uses query parameters for testing (e.g., localhost:3000?company=daraz)

### 2. Order Management
- Sortable columns
  - Order ID (numeric sorting)
  - Customer Name (alphabetical sorting)
  - Amount (numeric sorting)
  - Status (alphabetical sorting)
- Status badges with color coding
  - Delivered: Green
  - Pending: Yellow
  - Shipped/In Transit: Blue
  - Cancelled: Red
  - Preparing: Gray

### 3. Pagination
- 10 orders per page
- Previous/Next navigation
- Page number indicators
- Order count display

### 4. Company Onboarding
- Company name validation
- Subdomain format validation
- Admin email verification
- Automatic subdomain setup

## Production Deployment

1. Set up wildcard DNS records for your domain: