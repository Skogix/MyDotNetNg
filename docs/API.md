# Task Manager API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### Get All Tasks
Retrieve all tasks sorted by creation date (newest first).

**Endpoint:** `GET /tasks`

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "completed": false,
    "createdAt": "2023-10-26T12:00:00.000Z"
  }
]
```

### Get Single Task
Retrieve a specific task by ID.

**Endpoint:** `GET /tasks/:id`

**Parameters:**
- `id` (string): Task ID

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false,
  "createdAt": "2023-10-26T12:00:00.000Z"
}
```

**Error Response:**
- `404 Not Found` - Task not found

### Create Task
Create a new task.

**Endpoint:** `POST /tasks`

**Request Body:**
```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false,
  "createdAt": "2023-10-26T12:00:00.000Z"
}
```

**Error Response:**
- `400 Bad Request` - Invalid request body

### Update Task
Update an existing task.

**Endpoint:** `PUT /tasks/:id`

**Parameters:**
- `id` (string): Task ID

**Request Body:**
```json
{
  "title": "Buy groceries and cook",
  "description": "Milk, eggs, bread, chicken",
  "completed": true
}
```

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Buy groceries and cook",
  "description": "Milk, eggs, bread, chicken",
  "completed": true,
  "createdAt": "2023-10-26T12:00:00.000Z"
}
```

**Error Response:**
- `404 Not Found` - Task not found
- `400 Bad Request` - Invalid request body

### Delete Task
Delete a task.

**Endpoint:** `DELETE /tasks/:id`

**Parameters:**
- `id` (string): Task ID

**Response:**
```json
{
  "message": "Task deleted successfully"
}
```

**Error Response:**
- `404 Not Found` - Task not found

### Health Check
Check if the API is running.

**Endpoint:** `GET /health`

**Response:**
```json
{
  "status": "ok"
}
```

## Error Handling

All errors return a JSON object with a `message` field:

```json
{
  "message": "Error description"
}
```

Common HTTP status codes:
- `200 OK` - Request successful
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error
