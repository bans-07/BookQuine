# BookQuine (GraphQL Edition)

## 📝 Description

Book Search Engine is a full-stack application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to search for books using the Google Books API, save favorite books to their account, and manage their saved book collection.

Originally implemented using a traditional RESTful API, this version refactors the backend to use **GraphQL** powered by **Apollo Server** for improved data querying flexibility and efficiency.

Users can sign up, log in securely with **JWT authentication**, perform book searches, and persist their favorite books in a MongoDB database hosted on **MongoDB Atlas**. The frontend interacts with the Apollo Server via **Apollo Client**, enabling real-time data updates and better state management across the app.

This project is designed to give developers a hands-on understanding of how to integrate GraphQL with authentication in a full-stack environment, and how to deploy such apps using **Render**.

---

## 📌 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [GraphQL Schema](#graphql-schema)
- [Features](#features)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [License](#license)

---

## ⚙️ Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/book-search-engine.git
   cd book-search-engine
