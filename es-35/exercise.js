// the error is: ReferenceError: personName is not defined
// to fix it, we need to declare the variable personName before the if statement
// or we can remove the if statement
function canPlay() {
  let sport = " Football";

  let personName = "Cosimo";

  console.log(personName + sport);
}

canPlay();
