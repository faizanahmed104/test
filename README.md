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

while for local testing we can use query params

daraz orders by default @ localhost:3000
foodpanda orders http://localhost:3000/?company=foodpanda
amazon orders http://localhost:3000/?company=amazon

<div align="center">
  <img src="/daraz.png" alt="Daraz" width="200"/>
</div>
<div align="/center">
  <img src="foodpanda.png" alt="foodpanda" width="200"/>
</div>
<div align="center">
  <img src="/amazon.png" alt="amazon" width="200"/>
</div>
