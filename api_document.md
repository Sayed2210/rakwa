# API Documentation

## Authentication

### Login

- **Endpoint:** `login`
- **Method:** `POST`
- **Request:**
  ```json
  {
    "email": "K5yMx@example.com",
    "password": "123456"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "K5yMx@example.com",
    "token": "your_token",
    "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
    "type": 1, // 1: owner, 2: guest
    "phone": "1234567890"
  }
  ```
  }
- **Response Status Code:** `200`
- **Response Message:** `User logged in successfully.`

### Register

- **Endpoint:** `register`
- **Method:** `POST`
- **Request:**
  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "K5yMx@example.com",
    "password": "123456",
    "confirm_password": "123456",
    "type": 1,
    "phone": "1234567890",
    "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png" // optional
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "K5yMx@example.com",
    "token": "your_token",
    "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
    "type": 1, // 1: owner, 2: guest
    "phone": "1234567890"
  }
  ```
- **Response Status Code:** `200`
  }
  ```
  {
    "message": "User registered successfully."
  }
  ```
  }
- **Response Message:** `User registered successfully.`
- **Response Status Code:** `200`

### Logout

- **Endpoint:** `logout`
- **Method:** `POST`
- **Request:**
  ```json
  {
    "token": "your_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User logged out successfully."
  }
  ```
- **Response Status Code:** `200`
- **Response Message:** `User logged out successfully.`
  }
- **Response Status Code:** `200`

### Reset Password

- **Endpoint:** `reset_password`
- **Method:** `POST`
- **Request:**
  ```json
  {
    "email": "K5yMx@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Password reset link sent to your email."
  }
  ```
- **Response Status Code:** `200`
- **Response Message:** `Password reset link sent to your email.`

### Verify Code

- **Endpoint:** `verify_code`
- **Method:** `POST`
- **Request:**
  ```json
  {
    "email": "K5yMx@example.com",
    "code": "123456"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Password reset link sent to your email."
  }
  ```
- **Response Status Code:** `200`
- **Response Message:** `Password reset link sent to your email.`

### Set Password

- **Endpoint:** `set_password`
- **Method:** `POST`

  - **Request:**

    ```json
    {
      "email": "K5yMx@example.com",
      "password": "123456",
      "password_confirmation": "123456"
    }
    ```

  - **Response:**

    ```json
    {
      "message": "Password reseted."
    }
    ```

- **Response Status Code:** `200`
- **Response Message:** `Password reseted .`

### Endpoint for home page

- **Endpoint:** `categories`
- **Method:** `GET or POST`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Category 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
    },
    {
      "id": 2,
      "name": "Category 2",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
    }
  ]
  ```
- **Response Status Code:** `200`
- **Response Message:** `Categories fetched successfully.`

- **Endpoint:** `popular_categories`
- **Method:** `GET or POST`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Category 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
    },
    {
      "id": 2,
      "name": "Category 2",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
    }
  ]
  ```
- **Response Status Code:** `200`
- **Response Message:** `Popular Categories fetched successfully.`

- **Endpoint:** `most_visited_places`
- **Method:** `GET or POST`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Place 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
      "rating": 4.5,
      "reviews": 10,
      "is_sponsored": 1 // 1: sponsored, 0: not sponsored,
      "address": "123 Main St, Anytown, USA",
      "type": 1 // 1: place, 2: service, 3: event
      "place": "restaurant",
    },
    {
      "id": 2,
      "name": "Place 2",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
      "rating": 4.5,
      "reviews": 10,
      "is_sponsored": 1 // 1: sponsored, 0: not sponsored,
      "address": "123 Main St, Anytown, USA",
      "type": 1 // 1: place, 2: service, 3: event
        "place": "restaurant",
    }
  ]
  ```
- **Response Status Code:** `200`
- **Response Message:** `Most Visited Places fetched successfully.`

- **Endpoint:** `blogs`
- **Method:** `GET or POST`
  - **Response:**
    ```json
    [
      {
        "id": 1,
        "name": "Blog 1",
        "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
        "date": "2022-01-01",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        "id": 2,
        "name": "Blog 2",
          "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
    "date": "2022-01-01",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ]
    ```
- **Response Status Code:** `200`
- **Response Message:** `Blogs fetched successfully.`
