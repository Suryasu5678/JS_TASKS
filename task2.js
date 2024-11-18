//npm install axios.
// to instal the axios
// Import Axios in Node.js
// Log the user data
// get method

// const axios = require("axios");

//   axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error("Error fetching user data:", error);
//     });

//creating a new user or submitting a form
// post method

//     const axios = require("axios");

// axios
//   .post("https://jsonplaceholder.typicode.com/users", {
//     name: "surya Dotzz",
//     email: "suryasu@gmail.com",
//   })
//   .then((response) => {
//     console.log("User created:", response.data);
//   })
//   // if any error occurs it will show the message
//   .catch((error) => {
//     console.error("Error posting user data:", error);
//   });

// Updating the email
// Log the updated user data
// Log any errors

// const axios = require("axios");

// axios
//   .put("https://jsonplaceholder.typicode.com/users/1", {
//     name: "surya Dotzz",
//     email: "suryasu@gmail.com",
//   })
//   .then((response) => {
//     console.log("User updated:", response.data);
//   })
//   .catch((error) => {
//     console.error("Error updating user data:", error);
//   });

//   // Deleting user with ID 1
//   // Response is typically empty for DELETE requests
//   // if wrong if else answer Logs any errors
//   const axios = require("axios");

//   axios
//     .delete("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => {
//       console.log("User deleted:", response.data);
//     })
//     .catch((error) => {
//       console.error("Error deleting user data:", error);
//     });

//     //  post man
//      // Handle error
// // this is get
//     const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error))

//   // post
//    // Handle error
//   // Log created user
//   const axios = require('axios');

// axios.post('https://jsonplaceholder.typicode.com/users', {
//     name: 'surya DOtzz',
//     email: '@gmail.com'
//   })
//   .then(response => console.log(response.data))

//put
// const axios = require('axios');

// axios.put('https://jsonplaceholder.typicode.com/users/1', {
//     name: 'surya',
//     email: '@gmail.com'
//   })
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));

//delete

//   const axios = require('axios');

// axios.delete('https://jsonplaceholder.typicode.com/users/1')
//   .then(() => console.log('User deleted'))
//   .catch(error => console.error(error));

// 1. Key Endpoints,Required Headers,  Payload Structure,Query Parameters ,Response Formats
// GET /users – Retrieve all users.
// GET /users/{id} – Retrieve a user by ID.
// POST /users – Create a new user.
// PUT /users/{id} – Update an existing user.
// DELETE /users/{id} – Delete a user by ID.
// Content-Type: application/json
// Authorization: Bearer {token} (if authentication is required)
// Accept: application/json
// payload Structure:

// name, email, username, address, phone, website, company
// Query Parameters (for GET):

// _limit, `_page

// const axios = require("axios");
// const BASE_URL = "https://jsonplaceholder.typicode.com/users";
// axios
//   .get(BASE_URL, {
//     params: {
//       _limit: 5,
//       _page: 1,
//       _sort: "name",
//     },
//   })
//   .then((response) => {
//     console.log("Paginated and Sorted Users:", response.data);
//   })
//   .catch((error) => {
//     console.error("Error fetching users:", error);
//   });

// put with payload
//  const userIdToUpdate = 1;
//  axios
//    .put(`${BASE_URL}/${userIdToUpdate}`, {
//      id: userIdToUpdate,
//      name: "surya",
//      username: "suryadotzz",
//      email: "@gmail.com",
//    })
//    .then((response) => {
//      console.log("Updated User:", response.data);
//    })
//    .catch((error) => {
//      console.error("Error updating user:", error);
//    });

//3 using chat gpt doubt in the below section

const axios = require("axios");

// POST request with JSON payload
axios
  .post(
    "https://jsonplaceholder.typicode.com/users",
    {
      name: "John Doe",
      username: "johndoe",
      email: "johndoe@example.com",
      address: {
        street: "123 Main St",
        suite: "Apt 4",
        city: "Anytown",
        zipcode: "12345",
      },
      phone: "123-456-7890",
      website: "www.johndoe.com",
      company: {
        name: "Doe Enterprises",
        catchPhrase: "Innovating the Future",
      },
    },
    {
      headers: {
        Authorization: "Bearer your-token-here",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  )
  .then((response) => {
    console.log("Created User:", response.data);
  })
  .catch((error) => {
    console.error("Error creating user:", error);
  });
