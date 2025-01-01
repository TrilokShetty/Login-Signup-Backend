# Node.js User Authentication Project

This project is a basic Node.js application with user authentication, using EJS for templating.

## Project Structure

```
config/
  db.js            # Database connection setup
models/
  user.js          # User model definition
public/
views/
  home.ejs         # Home page view
  login.ejs        # Login page view
  signup.ejs       # Signup page view
  welcome.ejs      # Welcome page view
.gitignore         # Ignored files
package.json       # Project dependencies
package-lock.json  # Dependency lock file
server.js          # Main server file
```

## Features

- User Signup
- User Login
- Welcome page after authentication
- Basic project structure

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [MongoDB](https://www.mongodb.com/) installed or an accessible MongoDB URI

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Update the MongoDB URI in `config/db.js`:


   Replace `'your-mongodb-uri'` with your actual MongoDB connection string.

5. Start the server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## License

This project is licensed under the MIT License.
