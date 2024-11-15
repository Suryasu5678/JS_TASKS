// Simple GET request using fetch
// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error:", error));

// this api from niteesh bro..fake api website
// take in fake store api

// fetch("https://fakestoreapi.com/products/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`, 2000);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error:", error));


  
// it has an get post put delete

axios
  .get("https://api.example.com/users")
  .then((response) => console.log(response.data));


  axios
    .post("https://api.example.com/users", { name: "John Doe", age: 30 })
    .then((response) => console.log(response.data));


    axios
      .put("https://api.example.com/users/1", { name: "John Doe", age: 31 })
      .then((response) => console.log(response.data));


    axios
      .delete("https://api.example.com/users/1")
      .then((response) => console.log(response.data));
