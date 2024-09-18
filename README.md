Here's the updated version of the README with your repository link included at the bottom:

---

# **Book Search Engine**

## **Description**
The **Book Search Engine** is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to search for books via the Google Books API, save books to their profile, and manage them. The application is refactored to use GraphQL with Apollo Server for handling API requests instead of the traditional RESTful API approach.

## **Features**
- **Search Books**: Users can search for books using the Google Books API.
- **User Authentication**: Users can sign up, log in, and manage their sessions securely.
- **Save Books**: Logged-in users can save books to their profiles for later reference.
- **Manage Saved Books**: Users can view and remove saved books from their profile.
  
## **Technologies Used**
- **MongoDB**: Database for storing user profiles and saved books.
- **Express.js**: Web framework for building the backend.
- **React.js**: Frontend framework for building a dynamic user interface.
- **Node.js**: JavaScript runtime environment for running the server.
- **GraphQL**: Query language used for interacting with the API.
- **Apollo Server**: Manages GraphQL queries and mutations on the backend.
- **JWT Authentication**: JSON Web Token (JWT) for secure user authentication.

## **Installation**

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies for both client and server:**
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Create a `.env` file in the root of the server with the following environment variables:**
   ```env
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret>
   ```

4. **Run the application:**
   ```bash
   npm run develop
   ```

   This will run both the frontend React application and the backend server concurrently.

## **GraphQL API**

### **Queries**
- **Get User Data** (`me`): Retrieves information about the logged-in user, including their saved books.

### **Mutations**
- **Login User** (`login`): Logs in an existing user and returns a token.
- **Add User** (`addUser`): Registers a new user.
- **Save Book** (`saveBook`): Saves a book to the user's profile.
- **Remove Book** (`removeBook`): Removes a saved book from the user's profile.

## **Schema**
The application uses the following GraphQL schema:

### **Types**
- **User**: `_id`, `username`, `email`, `bookCount`, `savedBooks`
- **Book**: `bookId`, `authors`, `description`, `title`, `image`, `link`
- **Auth**: `token`, `user`

### **Resolvers**
- **Queries**: Handles the `me` query for fetching user data.
- **Mutations**: Handles user authentication (`login`, `addUser`), and managing saved books (`saveBook`, `removeBook`).

## **Frontend Usage**
The frontend uses **Apollo Client** to manage GraphQL requests. Apollo hooks like `useQuery` and `useMutation` are implemented to interact with the backend.

### **Search Books** (`SearchBooks.jsx`)
- Allows users to search for books by title. When logged in, users can save books directly from the search results.

### **Saved Books** (`SavedBooks.jsx`)
- Displays the list of books saved by the logged-in user, with options to remove any saved book.

### **User Authentication** (`SignupForm.jsx` & `LoginForm.jsx`)
- Provides forms for users to sign up or log in. Authentication is handled using JWT.

## **Deployment**
The application is deployed to **Render**. You can view the live version [here](#).

## **Repository**
You can access the project repository on GitHub [here](https://github.com/fredonyernesto/book-search-engine).
