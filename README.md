# server

## Base URL
```
http://localhost:3000/
```

# User Routes

**Create User**
----
  Returns json data about new User.

* **URL**
  ```
  /users/signup
  ```

* **Method:**

  `POST`
  
*  **URL Params**
  
    None

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-Type: application/x-www-form-urlencoded`

    Body :

    ```
    name: String
    email: String
    password: String
    ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    
    expample
    ```
      {
        "data": {
            "id": 1,
            "name": "test",
            "email": "test@mail.com"
        },
        "msg": "User Register Success"
      }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:**
    
    ```
    {
      "msg": "Validation Error",
      "errors": [
          "Username length minimal is 4",
          "Minimum password length is 5",
          "Email Format is Invalid, Please Check Your Email Format Again !"
      ]
    }
    ```
  OR
  * **Code:** 400 Bad Request (duplicated Email) <br />
    **Content:**
    ```
    {
        "msg": "email must be unique"
    }
    ```
  OR

  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>
**Login User**
----
  Returns jwt token.

* **URL**
  ```
  /users/signin
  ```

* **Method:**

  `POST`
  
*  **URL Params**
  
    None

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-Type: application/x-www-form-urlencoded`

    Body :

    ```
    email: String
    password: String
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {
        "token": jwt-token
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:**
    
    ```
    {
      "msg": "Wrong Email/Password !"
    }
    ```
  OR

  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>

<!--routes google sign in belum google sign in -->

# 3rd Party API routes
## Nutritionix

**GET EXERCISE**
----
  Return exercise details.

* **URL**
  ```
  /nutritionix/excercise
  ```

* **Method:**

  `POST`
  
*  **URL Params**
  
    None

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-Type: application/x-www-form-urlencoded`

    Body :

    ```
    query: String
    gender: String
    height_cm: Number
    weight_kg: Number
    age: Number
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {
        "exercises": [
            {
                "tag_id": 317,
                "user_input": "ran",
                "duration_min": 30.02,
                "met": 9.8,
                "nf_calories": 436.39,
                "photo": {
                    "highres": "img_url",
                    "thumb": "img_url",
                    "is_user_uploaded": false
                },
                "compendium_code": 12050,
                "name": "running",
                "description": null,
                "benefits": null
            }
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    
    ```
    {
      "msg": "You must Login First"
    }
    ```
  OR
  * **Code:** 400 Bad Request <br />
    **Content:**
    
    ```
    {
      "msg": "Bad Request"
    }
    ```
  OR
  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>

## Wger

**GET ALL INGREDIENT LIST**
----
  List all ingredient from 3rd party api database

* **URL**
  ```
  /wger/ingredients
  ```

* **Method:**

  `GET`
  
*  **URL Params**
  
    None

* **Data Params**

  **Required**
    
    Headers:
    
    `Authorization: <wger-apikey>`
    `Accept: application/json`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    [
      {
          "id": 9217,
          "license_author": "quintern",
          "status": "1",
          "creation_date": "2017-02-26",
          "update_date": "2017-02-26",
          "name": "365 Organic Green Lentils - Raw",
          "energy": 360,
          "protein": "26.000",
          "carbohydrates": "60.000",
          "carbohydrates_sugar": "2.000",
          "fat": "1.000",
          "fat_saturated": "0.000",
          "fibres": null,
          "sodium": "0.000",
          "license": 2,
          "language": 2
      },
      {
          "id": 9218,
          "license_author": "quintern",
          "status": "1",
          "creation_date": "2017-02-26",
          "update_date": "2017-02-26",
          "name": "365 Organic Super Grains - a blend of white and red quinoa, millet and buckwheat",
          "energy": 360,
          "protein": "12.000",
          "carbohydrates": "66.000",
          "carbohydrates_sugar": "0.000",
          "fat": "5.000",
          "fat_saturated": "0.000",
          "fibres": null,
          "sodium": "0.000",
          "license": 2,
          "language": 2
      },
      {
          "id": 8304,
          "license_author": "wger.de",
          "status": "2",
          "creation_date": "2013-04-14",
          "update_date": "2017-01-19",
          "name": "4-Korn Waffeln",
          "energy": 403,
          "protein": "10.200",
          "carbohydrates": "80.200",
          "carbohydrates_sugar": null,
          "fat": "3.900",
          "fat_saturated": null,
          "fibres": null,
          "sodium": null,
          "license": 1,
          "language": 1
      },
      {
          "id": 8336,
          "license_author": "alphafitness.club",
          "status": "2",
          "creation_date": "2017-01-19",
          "update_date": "2017-01-19",
          "name": "Aalbessen",
          "energy": 24,
          "protein": "1.000",
          "carbohydrates": "5.000",
          "carbohydrates_sugar": null,
          "fat": "0.000",
          "fat_saturated": null,
          "fibres": null,
          "sodium": null,
          "license": 2,
          "language": 6
      },
      {
          "id": 8337,
          "license_author": "alphafitness.club",
          "status": "2",
          "creation_date": "2017-01-19",
          "update_date": "2017-01-19",
          "name": "Aardappelen",
          "energy": 85,
          "protein": "2.600",
          "carbohydrates": "18.600",
          "carbohydrates_sugar": null,
          "fat": "0.000",
          "fat_saturated": null,
          "fibres": null,
          "sodium": null,
          "license": 2,
          "language": 6
      }
  ]
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    
    ```
    {
      "msg": "You must Login First"
    }
    ```
  OR
  * **Code:** 400 Bad Request <br />
    **Content:**
    
    ```
    {
      "msg": "Bad Request"
    }
    ```
  OR
  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>

**GET MEAL LIST**
----
  Get all user's meal's ingredients list .

* **URL**
  ```
  /wger/meal-list
  ```

* **Method:**

  `GET`
  
*  **URL Params**
  
    None

* **Data Params**

  **Required**
    
    Headers:
    
    `Authorization: <wger-apikey>`
    `Accept: application/json`
    `token: <user_token>`
    `currentUser: <user_name>`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    [
      {
          "id": 2,
          "name": "Agave, raw (Southwest)",
          "energy": 3,
          "carbohydrates": "16.23",
          "protein": "0.52",
          "fat": "0.15",
          "UserId": 1,
          "createdAt": "2020-02-07T06:32:02.735Z",
          "updatedAt": "2020-02-07T07:45:25.037Z"
      },
      {
          "id": 3,
          "name": "Achterham",
          "energy": 14,
          "carbohydrates": "1",
          "protein": "18",
          "fat": "6",
          "UserId": 1,
          "createdAt": "2020-02-07T06:39:45.248Z",
          "updatedAt": "2020-02-07T06:39:45.248Z"
      },
      {
          "id": 5,
          "name": "Agave, cooked (Southwest)",
          "energy": 135,
          "carbohydrates": "32",
          "protein": "0.99",
          "fat": "0.29",
          "UserId": 1,
          "createdAt": "2020-02-07T07:18:05.822Z",
          "updatedAt": "2020-02-07T07:18:05.822Z"
      },
      {
          "id": 7,
          "name": "Acerola, (west indian cherry), raw",
          "energy": 18,
          "carbohydrates": "7.69",
          "protein": "0.4",
          "fat": "0.3",
          "UserId": 1,
          "createdAt": "2020-02-07T07:23:02.216Z",
          "updatedAt": "2020-02-07T07:26:05.875Z"
      }
  ]
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    
    ```
    {
      "msg": "You must Login First"
    }
    ```
  OR
  * **Code:** 400 Bad Request <br />
    **Content:**
    
    ```
    {
      "msg": "Bad Request"
    }
    ```
  OR
  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>

**ADD INGREDIENT**
----
  Input new ingredients to user's meal.

* **URL**
  ```
  /wger/ingredients
  ```

* **Method:**

  `POST`
  
*  **URL Params**
  
    None

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-type: application/json`
    `Authorization: <wger-apikey>`
    `Accept: application/json`
    `token: <user_token>`
    `currentUser: <user_name>`

    Body:

    ingredient_name:string,
    amount:integer


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {
        "id": 2,
        "name": "Agave, raw (Southwest)",
        "energy": 3,
        "carbohydrates": "16.23",
        "protein": "0.52",
        "fat": "0.15",
        "UserId": 1,
        "createdAt": "2020-02-07T06:32:02.735Z",
        "updatedAt": "2020-02-07T07:45:25.037Z"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    
    ```
    {
      "msg": "You must Login First"
    }
    ```
  OR
  * **Code:** 400 Bad Request <br />
    **Content:**
    
    ```
    {
      "msg": "Bad Request"
    }
    ```
  OR
  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>

**UPDATE INGREDIENT**
----
  UPDATE one ingredient of user's meal.

* **URL**
  ```
  /wger/ingredients/:id
  ```

* **Method:**

  `PUT`
  
*  **URL Params**
  
    **Required**

    `id=[integer]`

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-type: application.json`
    `Authorization: <wger-apikey>`
    `Accept: application/json`
    `token: <user_token>`
    `currentUser: <user_name>`

    Body:
    ```
    ingredient_name:string,
    amount:integer
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {
        "id": 2,
        "name": "Agave, raw (Southwest)",
        "energy": 3,
        "carbohydrates": "16.23",
        "protein": "0.52",
        "fat": "0.15",
        "UserId": 1,
        "createdAt": "2020-02-07T06:32:02.735Z",
        "updatedAt": "2020-02-07T07:45:25.037Z"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    
    ```
    {
      "msg": "You must Login First"
    }
    ```
  OR
  * **Code:** 400 Bad Request <br />
    **Content:**
    
    ```
    {
      "msg": "Bad Request"
    }
    ```
  OR
  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>

**DELETE INGREDIENT**
----
  DELETE one ingredient of user's meal.

* **URL**
  ```
  /wger/ingredients/:id
  ```

* **Method:**

  `DELETE`
  
*  **URL Params**
  
    **Required**

    `id=[integer]`

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-type: application.json`
    `Authorization: <wger-apikey>`
    `Accept: application/json`
    `token: <user_token>`
    `currentUser: <user_name>`

    Body:
    ```
    ingredient_name:string,
    amount:integer
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {}
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    
    ```
    {
      "msg": "You must Login First"
    }
    ```
  OR
  * **Code:** 400 Bad Request <br />
    **Content:**
    
    ```
    {
      "msg": "Bad Request"
    }
    ```
  OR
  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>