// normal method to do the fetch thing
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally();

// writing the promise function
const promisesix = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        name: "mohit",
        roll: "394",
        gmail: "mohit@google.com",
      });
    } else {
      reject("Error : Something went wrong ");
    }
    console.log("promise no six is working");
    resolve();
  }, 1000);
});

//  async and await
async function allUser() {
  try {
    const response = await promisesix;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
allUser();
