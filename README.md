📚 Library Management System

A full-stack project for managing books in a library.
The system allows users to perform basic CRUD operations on books.

Tech Stack:

Backend: ASP.NET Core (.NET 8) + SQLite + Entity Framework Core

Frontend: React + TypeScript

Database: SQLite (lightweight, file-based database)

🔽 Clone and Setup Project Locally
1️⃣ Clone the repository from GitHub:
git clone https://github.com/your-username/LibraryManagementSystem.git

2️⃣ Navigate into the project folder:
cd LibraryManagementSystem


You will see two main folders:

backend/LibraryAPI → ASP.NET Core backend

frontend/library-frontend → React + TypeScript frontend

🚀 Features

➕ Create a new book record (Title, Author, Description)

📖 View a list of existing books

✏️ Update an existing book record

❌ Delete a book record

🎨 User-friendly UI built with React + TypeScript

📑 Swagger API documentation included

🖥 Backend Setup (ASP.NET Core + SQLite)

Follow these steps to run the backend locally:

# Navigate to backend folder
cd backend/LibraryAPI

# Restore NuGet packages
dotnet restore

# Apply migrations (creates library.db SQLite file automatically)
dotnet ef database update

# Run the backend server
dotnet run


Once running, you can access:

Swagger UI: https://localhost:5288/swagger

API Base URL: http://localhost:5288/api/books

🌐 Frontend Setup (React + TypeScript)

Follow these steps to run the frontend locally:

# Navigate to frontend folder
cd frontend/library-frontend

# Install dependencies
npm install

# Start React development server
npm start


Now open in your browser:
👉 http://localhost:3000

▶️ Run the Full Application

Step 1: Start the backend

cd backend/LibraryAPI
dotnet restore
dotnet ef database update
dotnet run


Step 2: Start the frontend

cd frontend/library-frontend
npm install
npm start


Step 3: Open the app
👉 http://localhost:3000

✅ Now you can Add, View, Edit, and Delete books.

📂 Project Structure
LibraryManagementSystem/
│
├── backend/
│   └── LibraryAPI/         
│       ├── Controllers/    # API controllers
│       ├── Data/           # EF Core DbContext
│       ├── Models/         # Entity + DTOs
│       └── Program.cs      # App entry point
│
└── frontend/
    └── library-frontend/   # React + TypeScript frontend
        ├── src/components/ # React components
        ├── src/types.ts    # Type definitions
        └── src/api.ts      # Axios API setup
