# Carbon cell task 



# JWT Authentication and Secure API Endpoints with Express.js

This project demonstrates how to implement user authentication using JWT (JSON Web Tokens) in an Express.js application, along with creating secure API endpoints accessible only to authenticated users.

# Important!!
 use http://localhost:5000/api-docs/  <-after running node application for apis and swagger documentation


## Features

- User authentication with JWT tokens
- Registration, login, and logout endpoints
- Secure access to protected API endpoints
- Fetching data from a public API with filtering options
- Documentation of API endpoints using Swagger

## Prerequisites

- Node.js and npm installed on your machine

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd your-repository
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**
   
    - Create a `.env` file in the root directory.
    - Define environment variables:
        ```dotenv
        ACCESS_TOKEN_SECRET=your-access-token-secret
        REFRESH_TOKEN_SECRET=your-refresh-token-secret
        ```

5. **Run the application:**

    ```bash
    npm start
    ```

## Usage

### User Authentication

- **Registration:** Send a POST request to `/auth/signup` with `email` and `password` in the request body.
- **Login:** Send a POST request to `/auth/login` with `email` and `password` in the request body.
- **Logout:** Send a DELETE request to `/auth/logout`.
- **Token Refresh:** Send a POST request to `/auth/token` with a valid refresh token in the request headers.

### Secure API Endpoints

- **Private Endpoint:** Access private data by sending a GET request to `/private`. This endpoint requires a valid JWT access token obtained after authentication.

### Fetching Data

- **Fetch Data:** Send a GET request to `/fetchApi_filterAndLimit/api/data` to fetch data from a public API with filtering and limit options. This endpoint requires a valid JWT access token obtained after authentication.

## Swagger Documentation

Access Swagger documentation at `/api-docs` endpoint to explore and test API endpoints.

## Contributing

Contributions are welcome! Fork the repository, create your feature branch, commit your changes, and open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
