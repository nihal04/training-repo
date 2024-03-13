## Assignment Title: 
Building a Secure Authentication System with Express.js & Passport.js

## Assignment Description:
In this assignment, you will demonstrate your proficiency in building a secure authentication system for a web application using Express.js & Passport.js, Express-session, MongoDB for data storage, EJS for templating, and routing for handling different endpoints.

## Scenario:
You have been tasked with developing an authentication system for a social media platform called "Connectify." Connectify allows users to create accounts, log in securely, and access personalized content. As a backend developer, your task is to implement the authentication system using modern web development tools and techniques.

## Assignment Objectives:
1. Implement user registration, login, and logout functionalities using Passport.js for authentication.
2. Use Express-session for managing user sessions and ensuring secure session handling.
3. Store user data securely in MongoDB, including user credentials and session information.
4. Utilize EJS for server-side rendering of views and displaying dynamic content.
5. Design and implement routes for handling different HTTP requests such as GET, POST, and DELETE.
6. Ensure proper error handling and validation of user inputs.
7. Implement middleware for protecting routes and restricting access to authenticated users only.

## Requirements:
1. Use Express.js to set up the server and define routes for handling different functionalities.
2. Implement Passport.js for authentication strategies such as local authentication (username and password).
3. Utilize Express-session middleware for managing user sessions and session storage.
4. Store user data, including usernames, passwords (hashed), and session information, in MongoDB.
5. Use EJS for server-side rendering of views and displaying dynamic content to users.
6. Implement routes for user registration, login, logout, and accessing user-specific content.
7. Implement middleware for route protection to restrict access to authenticated users only.
8. Ensure proper error handling and validation of user inputs for security and usability purposes.
9. Use bootstrap for creating views.

## Views:
- Home Page (home.html):
    - The home page will serve as the landing page for the application.
    - It may include information about the platform, features, and a call-to-action for users to register or log in.

- User Registration (register.html):
    - This view will contain a form for users to register with the application.
    - It should include input fields for username, email, password, and any other required information.
    - Proper validation messages should be displayed for invalid inputs.

- User Login (login.html):
    - The login view will contain a form for users to enter their credentials and log in.
    - It should include input fields for username/email and password.
    - Proper validation messages should be displayed for invalid credentials.

- Friends List (friends.html):
    - The user profile view will display personalized content for authenticated users.
    - It includes the friends list. The data for friends list is coming from http://dummyjson.com/users. Display the data in bootstrap card.
    - Additional features like editing profile information or viewing user activity can be included here.