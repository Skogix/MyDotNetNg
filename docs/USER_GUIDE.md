# Task Manager User Guide

## Overview
Task Manager is a web application that helps you organize and manage your tasks and to-do lists efficiently. It features a clean, modern interface with support for both light and dark themes.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4 or higher)

### Installation

1. Clone the repository
2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../src
   npm install
   ```

4. Configure MongoDB connection:
   - Copy `server/.env.example` to `server/.env`
   - Update `MONGODB_URI` if needed (default: `mongodb://localhost:27017/taskmanager`)

### Running the Application

1. Start MongoDB service on your system

2. Start the backend server:
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:5000`

3. In a new terminal, start the frontend:
   ```bash
   cd src
   npm run dev
   ```
   The application will open at `http://localhost:3000`

## Features

### Adding Tasks
1. Enter a task title in the "Title" field (required)
2. Optionally add a description in the "Description" field
3. Click the "Add Task" button

### Managing Tasks

#### Mark as Complete
- Click the checkbox next to a task to mark it as complete
- Completed tasks appear with a strikethrough style

#### Edit Tasks
1. Click the "Edit" button on a task
2. Modify the title and/or description
3. Click "Save" to apply changes or "Cancel" to discard

#### Delete Tasks
1. Click the "Delete" button on a task
2. Confirm the deletion in the popup dialog

### Dark Mode
- Click the moon/sun icon in the header to toggle between light and dark themes
- Your preference is applied immediately across the entire interface

## Tips for Best Use

1. **Keep titles concise** - Use short, descriptive titles for better readability
2. **Use descriptions** - Add details in the description field for complex tasks
3. **Regular cleanup** - Delete completed tasks regularly to keep your list manageable
4. **Dark mode** - Use dark mode in low-light environments to reduce eye strain

## Troubleshooting

### Tasks not loading
- Ensure MongoDB is running
- Check that the server is running on port 5000
- Look for error messages in the browser console

### Cannot add tasks
- Verify the server is connected to MongoDB
- Check network connectivity
- Ensure the title field is not empty

### UI not updating
- Refresh the browser page
- Clear browser cache
- Check for JavaScript errors in the console

## Keyboard Shortcuts

- `Tab` - Navigate between fields
- `Enter` - Submit task form
- `Escape` - Cancel edit mode

## Browser Support

The application supports modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Data Storage

All tasks are stored in MongoDB. The data persists between sessions unless the database is cleared.
