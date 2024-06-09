Task Manager Application

This is a simple Task Manager application with a frontend built using React.js and Material-UI and a backend implemented with Node.js and Express.js. Tasks can be added, edited, and deleted through the user interface, with data being stored and retrieved from a RESTful API.

Installation and Setup

Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

Backend Setup

1. Clone the repository:
   git clone https://github.com/Sivag1203/task-manager.git

2. Navigate to the backend directory:
   cd task-manager/backend

3. Install dependencies:
   npm install

4. Start the server:
   npm start

   This will start the backend server at http://localhost:5000 by default.

Frontend Setup

1. Navigate to the frontend directory:
   cd task-manager/frontend

2. Install dependencies:
   npm install

3. Start the React app:
   npm start

   This will start the frontend development server and open the app in your default web browser.

Usage

- Open your web browser and go to http://localhost:3000 to access the Task Manager application.
- You can add new tasks, view detailed information on each task, edit existing tasks, and delete tasks using the user interface.

API Endpoints

- GET /tasks: Retrieve all tasks.
- POST /tasks: Create a new task.
- GET /tasks/:id: Retrieve a single task by ID.
- PUT /tasks/:id: Update an existing task.
- DELETE /tasks/:id: Delete a task by ID.

Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.
