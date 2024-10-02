// staring with promise five

const promisefive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        username: "golden",
        password: 123,
        gmail: "golden@google.com",
      });
    } else {
      reject("Error: Js went wrong");
    }
  }, 1000);
});

async function consumepromisefive() {
  try {
    const response = await promisefive;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
consumepromisefive();

// take time and read the below code carefully
async function getALLUsers() {
  {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
getALLUsers();

// writing the above code with then and catch

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("done"));
