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

## sportsDb

**GET FOOTBALL**
----
  Return Football database.

* **URL**
  ```
  /sportsDb/football
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
    country: String
    league: String
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {
    "teams": [
        {
            "idTeam": "134368",
            "idSoccerXML": "824",
            "idAPIfootball": "1360",
            "intLoved": null,
            "strTeam": "Accrington",
            "strTeamShort": null,
            "strAlternate": "Accrington Stanley",
            "intFormedYear": "1968",
            "strSport": "Soccer",
            "strLeague": "English League 1",
            "idLeague": "4396",
            "strDivision": null,
            "strManager": "",
            "strStadium": "Crown Ground",
            "strKeywords": "Stanley, Accy Stanley",
            .....
            }, ....
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

**GET BASKETBALL**
----
  Return Basketball database.

* **URL**
  ```
  /sportsDb/basketball
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
    country: String
    league: String
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {
    "teams": [
        {
            "idTeam": "136323",
            "idSoccerXML": null,
            "idAPIfootball": null,
            "intLoved": null,
            "strTeam": "Agua Caliente Clippers",
            "strTeamShort": null,
            "strAlternate": "",
            "intFormedYear": "2017",
            "strSport": "Basketball",
            "strLeague": "NBA D-League",
            "idLeague": "4388",
            "strDivision": null,
            "strManager": "",
            "strStadium": "Citizens Business Bank Arena",
            .....
            }, ....
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

**GET AMERICAN FOOTBALL**
----
  Return American Football database.

* **URL**
  ```
  /sportsDb/americanFootball
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
    country: String
    league: String
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {
    "teams": [
        {
            "idTeam": "136981",
            "idSoccerXML": null,
            "idAPIfootball": null,
            "intLoved": null,
            "strTeam": "Abilene Christian",
            "strTeamShort": null,
            "strAlternate": "Wildcats",
            "intFormedYear": "1919",
            "strSport": "American Football",
            "strLeague": "NCAA Division 1",
            "idLeague": "4479",
            "strDivision": "FCS",
            "strManager": "",
            "strStadium": "Anthony Field at Wildcat Stadium",
            "strKeywords": "Wildcats",
            .....
            }, ....
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