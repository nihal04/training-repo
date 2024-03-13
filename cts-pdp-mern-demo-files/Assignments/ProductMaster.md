### Assignment Case Study
Building a React and Redux Application

### Objective
The objective of this assignment is to build a complex web application using React for the user interface and Redux for state management. The application will simulate a real-world scenario where multiple components need to interact with each other and share state through a centralized store.

### Scenario
You are tasked with building a product management tool called "ProductMaster." ProductMaster allows users to manage a catalog of products, including adding new products, editing existing products, and deleting products. The application should have multiple views, including a dashboard displaying product statistics and a detailed view for individual products.

### Expected React Components
- App Component: The root component of the application responsible for rendering different views.
- Header Component: Displays an App bar with view options and search bar.
- ProductList Component: Displays a list of products from https://dummyjson.com/products
- Product Component: Displays an individual product (It is a child of ProductList Component)

### Redux Utilization
- Store: Create a Redux store to manage the application's global state.
- Actions: Define action types and action creators for managing products (e.g., GET_PRODUCTS, DELETE_PRODUCT).
- Reducers: Implement reducers to handle state changes for products.
- Middleware: Utilize middleware like Redux Thunk for handling asynchronous actions, such as fetching product data from an API.

### Expected Output:
- Product Management View: Users can view a list of products and delete products.
- Redux Integration: Changes made to products should be reflected across the application in real-time, thanks to Redux's centralized state management.
- Responsive Design: Ensure the application is responsive and accessible, with a user-friendly interface that adapts to different screen sizes. You need to use material ui for designing the application.
