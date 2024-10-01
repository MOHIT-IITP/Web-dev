// then = resolve
// catch = reject
const promiseOne = new Promise(function (resolve, reject) {
  // do async task
  // Db call , cryptography , network
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise consumed");
});

// another method to do the above task

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

// making another promise

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise 3 completed");
    resolve({
      username: "mohit",
      email: "mohit@example.com",
      country: "India",
    });
  }, 1000);
}).then(function (user) {
  console.log(user); // you can access the object of the resolve like this
});

// making fourth promise
// dealing with error

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "mohit", password: "123" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    // using then
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // again using then
    console.log(username);
  })
  .catch((error) => {
    // using catch for reject
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));
