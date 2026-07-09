# Postman Setup Guide

## Overview

This guide explains how to organize and use Postman for testing the **Dukandar API**.

---

# Project Structure

```text
backend/
│
├── postman/
│   ├── Dukandar.postman_collection.json
│   ├── Local.postman_environment.json
│   ├── Development.postman_environment.json
│   └── Production.postman_environment.json
│
├── docs/
│   └── postman.md
│
└── src/
```

---

# Create a Collection

Create a new Postman Collection named:

```
Dukandar API
```

Inside the collection create the following folders.

```
Dukandar API
│
├── Authentication
├── Users
├── Shops
├── Categories
├── Suppliers
├── Products
├── Notifications
├── Dashboard
├── Reports
├── Settings
```

---

# Create an Environment

Create a Postman Environment named

```
Local Development
```

Add the following variables.

| Variable      | Value                        |
| ------------- | ---------------------------- |
| BASE_URL      | http://localhost:5000/api/v1 |
| ACCESS_TOKEN  |                              |
| REFRESH_TOKEN |                              |
| USER_ID       |                              |
| SHOP_ID       |                              |
| CATEGORY_ID   |                              |
| SUPPLIER_ID   |                              |
| PRODUCT_ID    |                              |

---

# Authentication APIs

## Register

```
POST {{BASE_URL}}/auth/register
```

---

## Login

```
POST {{BASE_URL}}/auth/login
```

After login, copy the returned Access Token into

```
ACCESS_TOKEN
```

---

## Logout

```
POST {{BASE_URL}}/auth/logout
```

---

## Refresh Token

```
POST {{BASE_URL}}/auth/refresh-token
```

---

# Authorization

For protected APIs add the following header.

```
Authorization: Bearer {{ACCESS_TOKEN}}
```

---

# Product APIs

## Create Product

```
POST {{BASE_URL}}/products
```

---

## Get All Products

```
GET {{BASE_URL}}/products
```

---

## Get Product

```
GET {{BASE_URL}}/products/{{PRODUCT_ID}}
```

---

## Update Product

```
PATCH {{BASE_URL}}/products/{{PRODUCT_ID}}
```

---

## Delete Product

```
DELETE {{BASE_URL}}/products/{{PRODUCT_ID}}
```

---

## Update Stock

```
PATCH {{BASE_URL}}/products/{{PRODUCT_ID}}/stock
```

---

## Search Product

```
GET {{BASE_URL}}/products?search=milk
```

---

## Filter by Category

```
GET {{BASE_URL}}/products?category={{CATEGORY_ID}}
```

---

## Pagination

```
GET {{BASE_URL}}/products?page=1&limit=10
```

---

# Category APIs

```
POST {{BASE_URL}}/categories

GET {{BASE_URL}}/categories

GET {{BASE_URL}}/categories/{{CATEGORY_ID}}

PATCH {{BASE_URL}}/categories/{{CATEGORY_ID}}

DELETE {{BASE_URL}}/categories/{{CATEGORY_ID}}
```

---

# Supplier APIs

```
POST {{BASE_URL}}/suppliers

GET {{BASE_URL}}/suppliers

GET {{BASE_URL}}/suppliers/{{SUPPLIER_ID}}

PATCH {{BASE_URL}}/suppliers/{{SUPPLIER_ID}}

DELETE {{BASE_URL}}/suppliers/{{SUPPLIER_ID}}
```

---

# Shop APIs

```
POST {{BASE_URL}}/shops

GET {{BASE_URL}}/shops

GET {{BASE_URL}}/shops/{{SHOP_ID}}

PATCH {{BASE_URL}}/shops/{{SHOP_ID}}

DELETE {{BASE_URL}}/shops/{{SHOP_ID}}
```

---

# Notification APIs

```
GET {{BASE_URL}}/notifications

PATCH {{BASE_URL}}/notifications/:id/read

DELETE {{BASE_URL}}/notifications/:id
```

---

# Dashboard APIs

```
GET {{BASE_URL}}/dashboard

GET {{BASE_URL}}/admin/dashboard
```

---

# Reports APIs

```
GET {{BASE_URL}}/reports/expiry

GET {{BASE_URL}}/reports/inventory

GET {{BASE_URL}}/reports/category

GET {{BASE_URL}}/reports/supplier
```

---

# Common Headers

```
Content-Type: application/json

Authorization: Bearer {{ACCESS_TOKEN}}
```

---

# API Versioning

All APIs should follow this structure.

```
/api/v1/auth

/api/v1/users

/api/v1/shops

/api/v1/categories

/api/v1/suppliers

/api/v1/products

/api/v1/dashboard

/api/v1/reports

/api/v1/settings
```

---

# Testing Order

1. Register User
2. Login
3. Copy Access Token
4. Create Shop
5. Create Category
6. Create Supplier
7. Create Product
8. Get Products
9. Update Product
10. Delete Product
11. Test Dashboard
12. Test Reports
13. Logout

---

# Best Practices

* Use Environment Variables.
* Never hardcode JWT tokens.
* Group requests by module.
* Save example responses.
* Test both success and error cases.
* Keep separate environments for Local, Development, and Production.
* Export the collection regularly and commit it to version control.
