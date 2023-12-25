# JavaScript NodeJs Assignment
## Introduction
This project implements a simple RESTful API for managing products. It is built using Node.js and TypeScript, and it uses Express as the web framework. 
The API allows users to perform CRUD (Create, Read, Update, Delete) operations on products. Product data is stored in an in-memory array.
## Installation
```git
git clone <repository-url>
```
Navigate to the project directory:
```git
cd <project-directory>
````
Install dependencies:
```javascript
npm install
```
### Running the Server
To start the server, run the following command:
```javascript
npm start
```
The server will be running at http://localhost:5000.
# API Endpoints
 Get a List of Products
Endpoint: GET /api/products
Description: Retrieve a list of all products.
Example Response:
```javascript
[
  { "id": 1, "name": "Product 1", "price": 10.99 },
  { "id": 2, "name": "Product 2", "price": 19.99 }
]
```

