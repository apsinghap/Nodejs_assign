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
  { "id": 1, "name": "Product 1", "price": 20.99 },
  { "id": 2, "name": "Product 2", "price": 17.99 }
]
```
### Get Details of a Specific Product
- Endpoint: GET /api/products/:id
* Description: Retrieve details of a specific product by ID.
+ Example Response:

```json
{ "id": 1, "name": "Product 1", "price": 20.99 }
```
### Create a New Product
- Endpoint: POST /api/products
* Description: Create a new product.
+ Request Body:
```json
{ "name": "New Product", "price": 29.99 }
```
### Update Details of a Specific Product
- Endpoint: PUT /api/products/:id
* Description: Update details of a specific product by ID.
+ Request Body:
```json
{ "name": "Updated Product", "price": 39.99 }
```
### Delete a Product
- Endpoint: DELETE /api/products/:id
* Description: Delete a product by ID.
+ Example Response: No content (status code 204)

## Middleware
The API includes a middleware function that logs the timestamp, HTTP method, and request URL for every incoming request.
This logging helps in monitoring and debugging.

## Testing
The project includes a set of test cases written using Mocha, Chai, and Supertest. To run the tests, use the following command:
```
npm test
```
# Conclusion
This API provides a basic foundation for managing products and can be extended based on specific project requirements. Feel free to modify and enhance the code according to your needs.

