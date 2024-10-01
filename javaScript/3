// staring with promise five

const promisefive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
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
