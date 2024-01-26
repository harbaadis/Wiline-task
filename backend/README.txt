# User Management API

This project is a simple User Management API that allows merging user data and provides basic CRUD operations.

## Getting Started

To run the project localy I used node express server and react ...

## Endpoints

- **GET /users**: Fetch all users. Query parameters: `query`, `email`, `phoneNumber`.
- **GET /users/{id}**: Fetch a single user by ID.
- **POST /users**: Create a new user. Expects a JSON payload.
- **PUT /users/{id}**: Update a user by ID. Expects a JSON payload.
- **DELETE /users/{id}**: Delete a user by ID.

## Testing

You can test the API using tools like curl or Postman. Here are some example commands:

- Fetch all users: `curl http://localhost:3001/users`
- Fetch a user by ID: `curl http://localhost:3001/users/1`
