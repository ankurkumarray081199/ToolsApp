let username = document.getElementById("name");
let passowrd = document.getElementById("password");

var flag = 1;

function validateForm() {
  if (username.value == "") {
    document.getElementById("nameError").innerHTML = "blank field";
    flag = 0;
  } else if (username.value.length < 3) {
    document.getElementById("nameError").innerHTML = "less than 3 char";
    flag = 0;
  } else {
    document.getElementById("nameError").innerHTML = "";
    flag = 1;
  }

  if (passowrd.value == "") {
    document.getElementById("passError").innerHTML = "empty password";
    flag = 0;
  } else {
    document.getElementById("passError").innerHTML = "";
    flag = 1;
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}
