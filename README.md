NextMart - Simple E-commerce App

Short Project Description: NextMart is a simple e-commerce application built with Next.js for the frontend and Express.js for the backend. It allows users to view products, see product details, and add new items. The backend stores items in a JSON file (items.json) without using a database.

Setup & Installation Instructions:

Prerequisites: Node.js (v18+ recommended), npm, Git

Backend Setup:

Go to backend folder: cd src/Backend

Install dependencies: npm install express cors

Start backend server: node server.js

Runs on: http://localhost:5000

Frontend Setup:

Go to frontend folder (Next.js project): cd src/Frontend

Install dependencies: npm install

Start frontend development server: npm run dev

Runs on: http://localhost:3000

Route Summary:

Frontend Routes:

/ → Landing page

/login → Mock login page

/items → List all products

/items/:id → View single product details

/add-item → Add new product (protected)

Backend API Routes:

/api/items → GET → Get all items

/api/items/:id → GET → Get single item by ID

/api/items → POST → Add new item

/api/items/:id → PUT → Update item by ID

/api/items/:id → DELETE → Delete item by ID

List of Implemented Features:

Landing Page with multiple sections

Authentication (mock login using hardcoded credentials)

Items List Page (publicly accessible)

Item Details Page (publicly accessible)

Add Item Page (protected, adds product to backend JSON file)

SweetAlert notifications for successful actions

LocalStorage-based login check

Brief Explanation of Features:

Landing Page: Showcases the project with multiple sections and navigation links.

Authentication: Hardcoded email/password (admin@example.com
 / Asd123), login state stored in localStorage, protected routes redirect unauthenticated users to /login.

Items List Page: Fetches products from backend API, displays product name, image, price, and description.

Item Details Page: Shows detailed information about a single product.

Add Item Page: Protected route (requires login), allows admin to add a product to backend (items.json), shows SweetAlert notification on successful addition.

Backend (Express.js): Handles CRUD operations for items, stores all products in a JSON file (items.json), no database required.

Notifications: SweetAlert used for better UX for actions like adding an item.

Mock Login Credentials:
Email: admin@example.com

Password: Asd123

Deployment Notes: Frontend: Deploy on Vercel, Backend: Deploy on Render or Heroku, ensure items.json is included and writable on deployed backend.