Portfolio Website
Welcome to my personal portfolio website built using the MERN stack (MongoDB, Express.js, React, Node.js). This project showcases my skills, projects, and contact information.

Table of Contents
Introduction

Features

Technologies Used

Installation

Usage

Project Structure

Contributing

License

Contact

Introduction
This portfolio website serves as a digital resume and portfolio where I present my work, skills, and contact information. It's a dynamic and responsive application that I built using the MERN stack to demonstrate my abilities in web development.

Features
User authentication and authorization

Dynamic project listing

Contact form

Responsive design

Copy to clipboard functionality for contact details

Technologies Used
MongoDB: Database for storing project details and user information.

Express.js: Web framework for Node.jsto handle server-side logic.

React: Frontend library for building user interfaces.

Node.js: Backend runtime environment.

Installation
To get a local copy of the project up and running, follow these steps:

Clone the repository:

sh
git clone https://github.com/yourusername/portfolio-website.git
Navigate to the project directory:

sh
cd portfolio-website
Install backend dependencies:

sh
cd server
npm install
Install frontend dependencies:

sh
cd ../client
npm install
Create a .env file in the server directory and add your environment variables:

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
Usage
Start the backend server:

sh
cd server
npm start
Start the frontend development server:

sh
cd ../client
npm start
Open your browser and navigate to http://localhost:3000 to see your portfolio website in action.

Project Structure
portfolio-website/
├── client/           # React frontend
│   ├── public/       # Public files
│   └── src/          # Source files
├── server/           # Express backend
│   ├── config/       # Configuration files
│   ├── controllers/  # Controllers
│   ├── models/       # Mongoose models
│   ├── routes/       # API routes
│   ├── utils/        # Utility functions
│   └── server.js     # Entry point
└── .gitignore
└── README.md
Contributing
Contributions are welcome! If you have any suggestions or improvements, please feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
Feel free to reach out to me via the contact details on the website or through the following links:

LinkedIn https://www.linkedin.com/in/dhruvrajsingh19/

GitHub https://github.com/CAPTAINRAJ19

Twitter https://x.com/DhruvRa48929519

Thank you for visiting my portfolio website!
