

#  E-Commerce Platform (Spring Boot + React + JWT + OAuth2)

## Problem Statement

Modern e-commerce platforms require secure, scalable authentication systems 
that support both traditional login and third-party OAuth providers. 
This project demonstrates how to build such a system using Spring Boot and React.

A full-stack **E-Commerce Web Application** built using **Spring Boot** for backend and **React.js** for frontend.
This project implements **secure authentication and authorization** using **Spring Security**, **JWT (JSON Web Tokens)**, and **OAuth2 (Google & GitHub Login)**.

---

##  Features

###  Authentication & Security

*  User Registration & Login
*  Secure authentication using **Spring Security**
*  Stateless authentication using **JWT Tokens**
*  OAuth2 login integration:

  * Google Login
  * GitHub Login
*  Role-based access control (extendable)
*  Password encryption using **BCrypt**

---

###  E-Commerce Functionalities

*  Product listing and browsing
*  Add to cart (extendable)
*  Search and filter products
*  RESTful APIs for product management

---

###  Frontend Integration

*  Built with **React.js**
*  Fully integrated with backend APIs
*  Token-based authentication handling
*  Clean UI with login/signup + OAuth buttons

---

##  Tech Stack

###  Backend

* Java 17+
* Spring Boot
* Spring Security
* Spring Data JPA
* Hibernate
* PostgreSQL (or any RDBMS)
* JWT (io.jsonwebtoken)

###  Frontend

* React.js
* Axios (API calls)
* Bootstrap / CSS

###  Authentication

* JWT (Token-based authentication)
* OAuth2 (Google & GitHub)

---

##  Authentication Flow

###  JWT Flow

1. User logs in using username/password
2. Backend validates credentials
3. JWT token is generated
4. Token is stored in frontend (localStorage)
5. Token is sent in headers for protected APIs

---

###  OAuth2 Flow

1. User clicks "Continue with Google/GitHub"
2. Redirect to OAuth provider
3. Successful authentication
4. Backend processes user info
5. JWT token generated
6. Redirect to frontend with token

---

##  Project Structure

```
ONLINELO/
│
├── Backend/
│   └── demo/
│       ├── src/main/java/com/example/demo/
│       │   ├── Controller/
│       │   ├── Service/
│       │   ├── Configuration/
│       │   ├── Model/
│       │   └── Repository/
│       │
│       └── src/main/resources/
│           ├── application.properties
│
├── Frontend/
│   └── React App
│
└── .gitignore
```

---

##  Setup Instructions

###  Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
```

2. Navigate to backend:

```bash
cd Backend/demo
```

3. Configure environment variables:

```env
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
JWT_SECRET=your-secret-key
```

4. Run the application:

```bash
mvn spring-boot:run
```

---

###  Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

##  Environment Variables

| Variable             | Description            |
| -------------------- | ---------------------- |
| GOOGLE_CLIENT_ID     | Google OAuth Client ID |
| GOOGLE_CLIENT_SECRET | Google OAuth Secret    |
| JWT_SECRET           | Secret key for JWT     |

---

##  Security Best Practices

*  No secrets stored in code
*  Environment variables used
*  JWT for stateless authentication
*  OAuth2 secure login
*  Password hashing with BCrypt

---

##  API Endpoints

###  Auth APIs

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login & get JWT

###  OAuth

* `/oauth2/authorization/google`
* `/oauth2/authorization/github`

---

##  Screenshots

(Add your UI screenshots here)

---

##  Future Improvements

*  Full cart & order management
*  Payment integration
*  User roles (Admin/User)
*  Admin dashboard
*  Order tracking system

---

##  Contributing

Contributions are welcome! Feel free to fork and improve the project.

---

##  License

This project is licensed under the MIT License.

---

##  Author

**Apurv Sinha**

---

##  Show Your Support

If you like this project, give it a ⭐ on GitHub!
