// Pending: The initial state; the operation hasn't completed yet.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
// then and catch is the main purpose to use in the promise
// resolve and reject these are used in the promises
// settled
// promise.all promise.allsettled promise.any promise.race
//resolve = value reject = reason

// let myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     setTimeout(() => {
//       resolve("its success ");
//     }, 30000);
//   } else {
//     reject("its failure");
//   }
// });
// Promise.all([myPromise])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// basic promise syntax but this is wrong way

// let myPromise = new Promise(function (resolve, reject) {
//   // some code that takes time, like loading data
//   let success = true; // change this to false to check error

//   if (success) {
//     resolve("The data has loaded successfully!");
//   } else {
//     reject("There was an error loading the data.");
//   }
// });

//set interval is used to repeatedly with a fixed time delay

// let myPromise = new Promise((resolve, reject) => {
//     let win =true
//     if (win) {
//        setInterval(()=>{resolve("yes we win");},3000)
//     } else {
//        setInterval(()=>{reject("we lost");},5000)}})
// Promise.race([myPromise])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

let Name = new Promise((resolve, reject) => {
  let per = true;
  if (per) {
    setInterval(() => {
      resolve("His Name is Correct");
    }, 1000);
  } else {
    setInterval(() => {
      reject("Its incorrect");
    }, 2000);
  }
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error, "ooo");
  });
