HighwayDelite

HighwayDelite is a modern web application built with React, Node.js, Express, and MongoDB. It provides secure user authentication, email OTP verification, and Google OAuth login to ensure a seamless and trustworthy user experience.

Features

Google OAuth Login: Users can sign in with their Google account using the @react-oauth/google library. The JWT token from Google is decoded on the frontend and sent securely to the backend for user verification and database storage.

OTP Authentication: Users can verify their email using One-Time Passwords (OTP) sent via email. This is implemented using Nodemailer to send secure OTPs to user emails during signup or sensitive actions.

JWT-based Authentication: After login (Google or OTP), users are issued a JWT token for secure session handling. The token is verified on the backend to protect private routes.

MongoDB Database: All user data, including Google account details and verified emails, are stored in a MongoDB database for persistence and security.

Frontend with React: Interactive UI built with React and Tailwind CSS for a responsive, modern, and user-friendly design.