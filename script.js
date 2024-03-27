console.log("Hello world!");
function notifyUser() {
  console.log("notifyUser function was called!");
}

//   function myAwesomeFunction(notifyUserCallback) {
//     console.log("Running myAwesomeFunction... doing complex tasks...");
//     console.log("Complex task complete. I will notify the user");
//     notifyUserCallback();
//   }

//   myAwesomeFunction(notifyUser);

//   function myAwesomeFunction(onCompleteCallback) {
//     console.log("Running myAwesomeFunction... doing complex tasks...");
//     console.log("Complex task complete. I will notify the user");
//     onCompleteCallback();
//   }

//   myAwesomeFunction(function () {
//     console.log("notifyUser function was called!");
//   })

// an arrow function below doing thesame thing as the function above

myAwesomeFunction(() => {
  console.log("notifyUser function was called!");
});

function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
}

// randomly choose if success is true or false
const success = Math.random() > 0.5;
if (success) {
  onSuccessCallback({
    message: "This is the message of success",
  });
} else {
  onFailureCallback();
}

myAwesomeFunction(
  (data) => {
    console.log("It was successful: ", data.message);
  },
  () => {
    console.log("It failed :(");
  }
);
