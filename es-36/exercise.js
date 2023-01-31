// sport is at the global scope, so it can be accessed from the any function
let sport = " Football";

function canPlay() {
  // personName defined at the function scope with a default value
  // so it won't throw an error if the if statement is not executed
  let personName = "Cosimo Default Value";

  if (true) {
    personName = "Cosimo";
  }

  console.log(personName + sport);
}

canPlay();
