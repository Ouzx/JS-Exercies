const password = "Hi";

switch (password.length) {
  case 4:
  case 5:
  case 6:
    console.log("Password length is correct");
    break;
  default:
    console.log("Password not valid ");
    break;
}
