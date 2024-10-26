 ``````````````````````````````````````````````Entry points`````````````````````````````````````````````````

Testing with Postman
You can use Postman to test the API endpoints. Below are the steps to set up and test each endpoint:
1. Get All Products
URL: /api/products
Method: GET
Description: Retrieve a list of all products.

Response
json

[
  {
    "id": 1,
    "name": "Product 1",
    "price": 100.0
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 200.0
  }
]

2. Get Product by ID
URL: /api/products/{id}
Method: GET
Description: Retrieve details of a product by its unique id.

URL Parameters
id (integer): Unique identifier of the product.
Response
json

{
  "id": 1,
  "name": "Product 1",
  "price": 100.0
}
3. Create New Product
URL: /api/products
Method: POST
Description: Add a new product with a name and price.

Request Body
json

{
  "name": "New Product",
  "price": 150.0
}
Response
json
Copy code
{
  "id": 3,
  "name": "New Product",
  "price": 150.0
}
4. Update Product
URL: /api/products/{id}
Method: PUT
Description: Update the name or price of an existing product by its id.

URL Parameters
id (integer): Unique identifier of the product.
Request Body
json

{
  "name": "Updated Product",
  "price": 175.0
}
Response
json
Copy code
{
  "id": 1,
  "name": "Updated Product",
  "price": 175.0
}
5. Delete Product
URL: /api/products/{id}
Method: DELETE
Description: Remove a product by its unique id.

Response
json

{
  "message": "Product deleted successfully."
}

