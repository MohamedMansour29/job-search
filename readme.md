# Job Search App

## Overview

The Job Search App is a comprehensive platform designed to connect job seekers with employers. It includes features such as user authentication, job postings, company profiles, job applications, and real-time messaging between users. The app is built using **Node.js**, **Express**, **MongoDB >> Mongoose**, and **Socket.IO** for real-time communication.

---

## Features

- **User Authentication**:
  - Register, login, and confirm email using OTP.
  - JWT-based authentication for secure access.

- **User Management**:
  - Update user profile.
  - Upload and delete profile pictures.

- **Company Management**:
  - Add, update, and delete company profiles.
  - View jobs posted by a specific company.

- **Job Management**:
  - Add, update, and delete job postings.
  - View all available jobs.

- **Job Applications**:
  - Apply for jobs.
  - Track application status (pending, accepted, viewed, consider, rejected).

- **Real-Time Messaging**:
  - Send and receive messages between users.
  - Mark messages as read.

- **Admin Panel**:
  - Ban/unban users and companies.
  - Restricted to users with the "admin" role.

- **Security**:
  - Rate limiting to prevent abuse.
  - Helmet for securing HTTP headers.
  - CORS for controlled access to the API.

- **Error Handling**:
  - Global error handling for consistent error responses.
  - Custom error messages for each API.

---

## Technologies Used

- **Backend**:
  - Node.js
  - Express
  - MongoDB (with Mongoose)
  - Socket.IO (for real-time messaging)
  - Apollo Server (for GraphQL)

- **Authentication**:
  - JSON Web Tokens (JWT)
  - Bcrypt for password hashing

- **Validation**:
  - Joi for request data validation

- **Security**:
  - Helmet
  - Rate Limiting
  - CORS

- **File Upload**:
  - Cloudinary for storing profile pictures and documents

- **Email Service**:
  - Nodemailer for sending OTPs and notifications

- **Cron Jobs**:
  - For automated tasks like deleting expired OTPs

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/job-search-app.git
   cd job-search-app