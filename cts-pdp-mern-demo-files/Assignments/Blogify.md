### Assignment Title
Building a Secure RESTful API with Express.js & JSON Web Token (JWT)

### Assignment Description
In this assignment, you will demonstrate your ability to design and implement a secure RESTful API using Express.js, JSON Web Token (JWT) for authentication, and various routes for user management.

### Scenario:
You have been hired to develop the backend for a blogging platform named "Blogify". The platform requires a robust API to manage user authentication and provide secure access to blog-related functionalities. As a backend developer, your task is to build the RESTful API with authentication using JWT.

### Assignment Objectives:
1. Implement user registration with hashed password storage.
2. Create a secure login route that generates JWT upon successful authentication.
3. Design protected routes that require a valid JWT for authorization.
4. Implement CRUD operations for blog posts, ensuring that only authenticated users can create, update, or delete their own posts.
5. Handle proper error messages and responses for various scenarios, including invalid tokens and unauthorized access.

### Requirements:
1. Use Express.js to set up the server and define routes for user authentication and blog-related functionalities.
2. Implement user registration with a POST request to create a new user account. Store user passwords securely using hashing.
3. Create a login route using JWT. Upon successful authentication, generate a JWT token containing relevant user information.
4. Design protected routes for CRUD operations on blog posts that require a valid JWT for authorization.
5. Ensure proper error handling, including responding with clear error messages and appropriate HTTP status codes.
6. Utilize JSON Web Token (JWT) for user authentication. Verify and decode JWTs to extract user information.
7. Include middleware to protect routes that require authentication. Unauthorized access should result in an error response.
8. User model should include fields for username, email, password (hashed), and any other relevant information.
9. Blog model should include fields for the title, content, author (reference to user), and any other relevant information.