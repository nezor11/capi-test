# capi-test

# Category Path Finder - Node.js Application

This is a simple Node.js application that helps you find the path of a specific category within a nested category structure. The application uses Express.js to provide an HTTP API for querying the category path.

---

## Features

- **Find the path of a category**: Given a category name, the application returns the full path to that category in a nested structure.
- **Case-insensitive search**: The search for categories is case-insensitive.
- **Error handling**: The application provides descriptive error messages for invalid inputs or missing categories.

---

## Prerequisites

Before running the application, ensure you have the following installed:

1. **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
2. **npm**: npm is included with Node.js, so you don't need to install it separately.

---

## Installation

1. **Clone the repository** (if applicable):

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

---

## Running the Application

1. **Start the server**:

   ```bash
   node app.js
   ```

   You should see the following message in the terminal:

   ```
   Server running at http://localhost:3000
   ```

2. **Access the API**:

   The application will be available at [http://localhost:3000](http://localhost:3000). You can test the API using a browser, curl, or tools like Postman.

---

## Testing the Application

Once the server is running, you can test the application by making requests to the `/category-path` endpoint.

### Example 1: Find the path for an existing category

- **Request**:

   ```bash
   curl "http://localhost:3000/category-path?name=category4"
   ```

- **Response**:

   ```json
   {
     "category": "category4",
     "path": "/category1/category3/category4"
   }
   ```

### Example 2: Find the path for a non-existent category

- **Request**:

   ```bash
   curl "http://localhost:3000/category-path?name=category6"
   ```

- **Response**:

   ```json
   {
     "error": "Category 'category6' not found."
   }
   ```

### Example 3: Missing category name

- **Request**:

   ```bash
   curl "http://localhost:3000/category-path"
   ```

- **Response**:

   ```json
   {
     "error": "You must provide a category name."
   }
   ```

---

## Project Structure

- `app.js`: The main application file containing the server setup and category path logic.
- `README.md`: This file, providing documentation for the project.
- `package.json`: Contains project metadata and dependencies.

---

## Customization

- **Add more categories**:  
  Modify the categories array in `app.js` to include your own nested category structure.

- **Change the port**:  
  To run the application on a different port, modify the `port` variable in `app.js`.

---

## License

This project is open-source and available under the MIT License.

---

## Author

- **Jorge Martínez**
- **GitHub**: [nezor11](https://github.com/nezor11)
- **Email**: contact@nezor.es
- **Website**: https://martinez.place/

