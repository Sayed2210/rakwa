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
      "place": "restaurant"
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
        "place": "restaurant"
    }
  ]
  ```
- **Response Status Code:** `200`
- **Response Message:** `Most Visited Places fetched successfully.`

- **Endpoint:** `home_blogs`
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

- **Endpoint:** `Blog/{slug}`
- **Method:** `GET or POST`
  - **Response:**
    ```json
      {
        "id": 1,
        "name": "Blog 1",
        "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
        "date": "2022-01-01",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
       "author": " John Doe",
      "comment_count": 5,
      "hashtags": [
          "hashtag1",
          "hashtag2"
        ]
      }
    ```
    }
  - **Response Status Code:** `200`
  - **Response Message:** `Blog fetched successfully.`
- **Endpoint:** `Blog/{slug}/comments`
- **Method:** `GET or POST`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "date": "2022-01-01",
      "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
      "author": "John Doe",
      "replies": [
        {
          "id": 1,
          "date": "2022-01-01",
          "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
          "author": "John Doe"
        },
        {
          "id": 2,
          "date": "2022-01-01",
          "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
          "author": "John Doe"
        }
      ]
    },
    {
      "id": 2,
      "date": "2022-01-01",
      "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
      "author": "John Doe",
      "replies": [
        {
          "id": 1,
          "date": "2022-01-01",
          "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
          "author": "John Doe"
        },
        {
          "id": 2,
          "date": "2022-01-01",
          "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
          "author": "John Doe"
        }
      ]
    }
  ]
  ```
- **Response Status Code:** `200`
- **Response Message:** `Comments fetched successfully.`

- **Endpoint:** `make_comment`
- **Method:** `POST`
- **params:**
  ```json
  {
    "blog_id": 1,
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "user-name": "John Doe",
    "user-email": "K5yMx@example.com"
  }
  ```
- **Request:**
  ```json
  {
    "blog_id": 1,
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "user-name": "John Doe",
    "user-email": "K5yMx@example.com"
  }
  ```
- **Response Status Code:** `200`
- **Response Message:** `Comment added successfully.`

- **Endpoint:** `blog_categories`
- **Method:** `GET or POST`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Category 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
      "blog_count": 10
    },
    {
      "id": 2,
      "name": "Category 2",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
      "blog_count": 5
    }
  ]
  ```
- **Response Status Code:** `200`
- **Response Message:** `Blog categories fetched successfully.`

- **Endpoint:** `popular_blogs`
- **Method:** `GET or POST`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Blog 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "date": "2022-01-01"
    },
    {
      "id": 2,
      "name": "Blog 2",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "date": "2022-01-01"
    }
  ]
  ```
- **Response Status Code:** `200`
- **Response Message:** `Popular blogs fetched successfully.`

- **Endpoint:** `search_blogs`
- **Method:** `GET or POST`
- **Params:**
  ```json
  {
    "query": "search query"
  }
  ```
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Blog 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "date": "2022-01-01"
    },
    {
      "id": 2,
      "name": "Blog 2",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "date": "2022-01-01"
    }
  ]
  ```
- **Response Status Code:** `200`
- **Response Message:** `Search results fetched successfully.`

- **Endpoint:** `about_us`
- **Method:** `GET or POST`
- **Response:**

  ```json
  {
  "images" : [
    {
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "alt": "image"
    },
    {
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "alt": "image"
    }
  ],
  "social": [
    {
      "facebook": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
      "x": "https://example.com",
      "instagram": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
    }
  ]
  }

  ```

- **Response Status Code:** `200`
- **Response Message:** `About us fetched successfully.`

- **Endpoint:** `our_vision`
- **Method:** `GET or POST`
- **Response:**

  ```json
   [
    {
      "id": 1,
      "name": "Vision 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

    },
    {
      "id": 2,
      "name": "Vision 2",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
  ```

- **Response Status Code:** `200`
- **Response Message:** `Our vision fetched successfully.`

- **Endpoint:** `our_team`
- **Method:** `GET or POST`
- **Response:**

  ```json
   [
    {
      "id": 1,
      "name": "Team 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "position": "Founder",
      "social":
        {
          "facebook": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
          "x": "https://example.com",
          "instagram": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      }
    }
    {
      "id": 1,
      "name": "Team 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "position": "Founder",
      "social":
        {
          "facebook": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
          "x": "https://example.com",
          "instagram": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      }
    }
  ]
  ```

- **Response Status Code:** `200`
- **Response Message:** `Our team fetched successfully.`

- **Endpoint:** `clients_opinion`
- **Method:** `GET or POST`
- **Response:**

  ```json
   [
    {
      "id": 1,
      "name": "Client 1",
      "email": "K5yMx@example.com",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": 2,
      "name": "Client 2",
      "email": "K5yMx@example.com",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
  ```

- **Response Status Code:** `200`
- **Response Message:** `Clients opinion fetched successfully.`

- **Endpoint:** `contact_us`
- **Method:** `GET or POST`
- **Params:**

  ```json
  {
    "name": "John Doe",
    "email": "K5yMx@example.com",
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
  ```

- **Response Status Code:** `200`
- **Response Message:** `Contact us message sent successfully.`

- **Endpoint:** `privacy_policy`
- **Method:** `GET or POST`
- **Response:**

  ```json
  [
    {
      "privacy_policy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "privacy_policy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "privacy_policy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
  ```

- **Response Status Code:** `200`
- **Response Message:** `Privacy policy fetched successfully.`

- **Endpoint:** `terms_and_conditions`
- **Method:** `GET or POST`
- **Response:**

  ```json
  [
    {
      "terms_and_conditions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "terms_and_conditions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "terms_and_conditions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
  ```

- **Response Status Code:** `200`
- **Response Message:** `Terms and conditions fetched successfully.`

- **Endpoint:** `faq`
- **Method:** `GET or POST`
- **Response:**

  ```json
  [
    {
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
  ```

- **Response Status Code:** `200`
- **Response Message:** `FAQ fetched successfully.`

- **Endpoint:** `update_profile`
- **Method:** `POST`
- **Params:**

  ```json
  {
    "first_name": "John Doe",
    "last_name": "Doe",
    "email": "K5yMx@example.com",
    "phone": "1234567890",
    "name": "John Doe",
    "about_me": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "send_notifications": 1, // 1: send notifications, 0: don't send notifications,
    "social": {
      "facebook": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
      "x": "https://example.com",
      "instagram": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
      "youtube": "https://example.com",
      "linkedin": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
      "whatsapp": "https://example.com"
    }
  }
  ```

- **Response Status Code:** `200`
- **Response Message:** `Profile updated successfully.`

- **Endpoint:** `change_password`
- **Method:** `POST`
- **Params:**

  ```json
  {
    "current_password": "123456",
    "new_password": "123456",
    "confirm_password": "123456"
  }
  ```

- **Response Status Code:** `200`
- **Response Message:** `Password changed successfully.`

- **Endpoint:** `my_listing`
- **Method:** `GET or POST`
- **Params:**

  ```json
  {
    "status": 1, // 1: active, 2: pending, 3: inactive,
    "page": 1,
    "limit": 10,
    "query": "search query"
  }
  ```

- \*\*Response

  ```json
  [
    {
      "id": 1,
      "name": "Listing 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      "address": "123 Main St, Anytown, USA",
      "views": 10,
      "status": 1 // 1: active, 2: pending, 3: inactive
    },
    {
      "id": 2,
      "name": "Listing 2",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "address": "123 Main St, Anytown, USA",
      "views": 20
    }
  ]
  ```

- **Response Status Code:** `200`
- **Response Message:** `My listing fetched successfully.`

- **Endpoint:** `logout`
- **Method:** `POST`
- **Response Status Code:** `200`
- **Response Message:** `Logout successfully.`

- **Endpoint:** `messages`
- **Method:** `GET or POST`
- **Response:**

  ```json
  [
    {
      "id": 1,
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "name": "John Doe",
      "email": "K5yMx@example.com",
      "phone": "1234567890",
      "created_at": "2023-01-01T00:00:00.000Z"
    },
    {
      "id": 2,
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "name": "John Doe",
      "email": "K5yMx@example.com",
      "phone": "1234567890",
      "created_at": "2023-01-01T00:00:00.000Z"
    }
  ]
  ```

- **Response Status Code:** `200`
- **Response Message:** `Messages fetched successfully.`

- **Endpoint:** `send_message`
- **Method:** `POST`
- **Params:**

  ```json
  {
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
  ```

- **Response Status Code:** `200`
- **Response Message:** `Message sent successfully.`

- **Endpoint:** `my_bookmarks`
- **Method:** `GET or POST`
- **Response:**

  ```json
  [
    {
      "id": 1,
      "name": "Listing 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      "address": "123 Main St, Anytown, USA",
      "category": "restaurant",
      "views": 10
    },
    {
      "id": 2,
      "name": "Listing 2",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "address": "123 Main St, Anytown, USA",
      "category": "restaurant",
      "views": 20
    }
  ]
  ```

- **Response Status Code:** `200`
- **Response Message:** `My bookmarks fetched successfully.`

- **Endpoint:** `my_reviews`

- **Params:**

  ```json
  {
    "page": 1,
    "limit": 10
  }
  ```

  - **Method:** `GET or POST`
    ```json
    [
      {
        "id": 1,
        "listing": {
          "id": 1,
          "name": "Listing 1"
        },
        "rating": 4.5,
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "created_at": "2023-01-01T00:00:00.000Z"
      },
      {
        "id": 2,
        "listing": {
          "id": 2,
          "name": "Listing 2"
        },
        "rating": 4.5,
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "created_at": "2023-01-01T00:00:00.000Z"
      }
    ]
    ```

  ```

  ```

- **Response Status Code:** `200`
- **Response Message:** `My reviews fetched successfully.`

- **Endpoint:** `delete_review`
- **Method:** `POST`
- **Params:**

  ```json
  {
    "id": 1
  }
  ```

- **Response Status Code:** `200`
- **Response Message:** `Review deleted successfully.`

- **Endpoint:** `other_reviews`
- **Method:** `GET or POST`
- **Params:**

  ```json
  {
    "page": 1,
    "limit": 10
  }
  ```

- **Response Status Code:** `200`
- **Response Message:** `Other reviews fetched successfully.`

- **Endpoint:** `add_listing`
- **Method:** `POST`

  - **Params:**

    ```json
    {
      "basic_information": {
        "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
        "title": "Listing 1",
        "keywords": "keyword1, keyword2, keyword3",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "category_id": 1,
        "service_id": 1,
        "minimum_price": 100,
        "maximum_price": 200
      },
      "location_information": {
        "address": "123 Main St",
        "friendly_address": "Anytown",
        "google_map_id": "US",
        "region": "USA",
        "lat": "12345",
        "lng": "67890"
      },
      "attachments": {
        "images": [
          {
            "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
          },
          {
            "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
          }
        ],
        "is_contact_widget": true,
        "whatsapp_number": "1234567890",
        "twitter_link": "https://twitter.com/example",
        "facebook_link": "https://www.facebook.com/example",
        "instagram_link": "https://www.instagram.com/example",
        "youtube_link": "https://www.youtube.com/example",
        "linkedin_link": "https://www.linkedin.com/example"
      },
      "opening_hours": [
        {
          "day_id": 1,
          "opening_hours": [
            {
              "opening_time": "09:00",
              "closing_time": "17:00"
            }
          ]
        },
        {
          "day_id": 2,
          "opening_hours": [
            {
              "opening_time": "09:00",
              "closing_time": "17:00"
            }
          ]
        },
        {
          "day_id": 3,
          "opening_hours": [
            {
              "opening_time": "09:00",
              "closing_time": "17:00"
            }
          ]
        },
        {
          "day_id": 4,
          "opening_hours": [
            {
              "opening_time": "09:00",
              "closing_time": "17:00"
            }
          ]
        }
      ]
    }
    ```

- **Response Status Code:** `200`
- **Response Message:** `Listing added successfully.`

- **Endpoint:** `update_listing`
- **Method:** `POST`

  - **Params:**

    ```json
    {
      "listing_id": 1,
      "basic_information": {
        "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png",
        "title": "Listing 1",
        "keywords": "keyword1, keyword2, keyword3",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "category_id": 1,
        "service_id": 1,
        "minimum_price": 100,
        "maximum_price": 200
      },
      "location_information": {
        "address": "123 Main St",
        "friendly_address": "Anytown",
        "google_map_id": "US",
        "region": "USA",
        "lat": "12345",
        "lng": "67890"
      },
      "attachments": {
        "images": [
          {
            "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
          },
          {
            "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
          }
        ],
        "is_contact_widget": true,
        "whatsapp_number": "1234567890",
        "twitter_link": "https://twitter.com/example",
        "facebook_link": "https://www.facebook.com/example",
        "instagram_link": "https://www.instagram.com/example",
        "youtube_link": "https://www.youtube.com/example",
        "linkedin_link": "https://www.linkedin.com/example"
      },
      "opening_hours": [
        {
          "day_id": 1,
          "opening_hours": [
            {
              "opening_time": "09:00",
              "closing_time": "17:00"
            }
          ]
        },
        {
          "day_id": 2,
          "opening_hours": [
            {
              "opening_time": "09:00",
              "closing_time": "17:00"
            }
          ]
        },
        {
          "day_id": 3,
          "opening_hours": [
            {
              "opening_time": "09:00",
              "closing_time": "17:00"
            }
          ]
        },
        {
          "day_id": 4,
          "opening_hours": [
            {
              "opening_time": "09:00",
              "closing_time": "17:00"
            }
          ]
        }
      ]
    }
    ```

- **Response Status Code:** `200`
- **Response Message:** `Listing updated successfully.`

- **Endpoint:** `search_listing`
- **Method:** `POST`
- **Params:**

  ```json
  {
    "page": 1,
    "limit": 10,
    "keyword": "keyword1"
  }
  ```

- **Response:**

  ```json
  [
    {
        "id": 1,
      "name": "Listing 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      "address": "123 Main St, Anytown, USA",
      "views": 10
    }
  {
        "id": 1,
      "name": "Listing 1",
      "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      "address": "123 Main St, Anytown, USA",
      "views": 10
    }
  ]
  ```

- **Response Status Code:** `200`
- **Response Message:** `Listings fetched successfully.`

- **Endpoint:** `filter_listings`

  - **Method:** `POST`

    - **Params:**

      ```json
      {
        "status": "open",
        "state": "state",
        "rate_count": 5,
        "distance": [10, 50],
        "price": [100, 200],
        "address": 1
      }
      ```

      - **Response:**

        ```json

          "listing" : [

            {
              "id": 1,
              "name": "Listing 1",
              "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              "address": "123 Main St, Anytown, USA",
              "views": 10
            }
        ],
        "similar_listing": [
            {
              "id": 1,
              "name": "Listing 1",
              "image": "https://cdn_icons_png.flaticon.com/512/149/149071.png"
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              "address": "123 Main St, Anytown, USA",
              "views": 10
            }
        ]
        ```

    -

- **Response Status Code:** `200`
- **Response Message:** `Listings fetched successfully.`

- **Endpoint:** `add_rate`
- **Method:** `POST`
- **Params:**

  ```json
  {
    "listing_id": 1,
    "rate": 4,
    "comment": "Great listing!",
    "images": ["images", "images"]
  }
  ```

- **Response:**

- **Response Status Code:** `200`
- **Response Message:** `Rate added successfully.`

- **Endpoint:** `add_rate`
- **Method:** `POST`
- **Params:**

  ```json
  {
    "listing_id": 1,
    "full_name": "Elsayed",
    "email": "Elsayed",
    "phone": "1234567890",
    "comment": "Great listing!",
    "images": ["images", "images"]
  }
  ```
  
- **Response Status Code:** `200`
- **Response Message:** `add claim successfully.`


- **Endpoint:** `upvote_rate`
- **Method:** `POST`
- **Params:**

  ```json
  {
    "listing_id": 2,
    "rate_id": 1
  }

- **Response Status Code:** `200`
- **Response Message:** `upvoted rate successfully.`



- **Endpoint:** `downvote_rate`
- **Method:** `POST`
- **Params:**

  ```json
  {
    "listing_id": 2,
    "rate_id": 1
  }

- **Response Status Code:** `200`
- **Response Message:** `downvote rate successfully.`
