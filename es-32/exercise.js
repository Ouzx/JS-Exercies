function sayHelloName(callback) {
  setTimeout(() => {
    console.log("Hello ");
    callback();
  }, 1000);
}

function printName() {
  console.log("John");
}

sayHelloName(printName);
