let signUpName = document.getElementById("sign-up-name");
let signUpEmail = document.getElementById("sign-up-email");
let signUpPassWord = document.getElementById("sign-up-password");
let btnSignUp = document.getElementById("btn-sign");
let pExist = document.getElementById("exist");

let data = [];
if (localStorage.getItem("dataStore") !== null) {
  data = JSON.parse(localStorage.getItem("dataStore"));
}

btnSignUp.addEventListener(`click`, function () {
  let inputData = {
    userName: signUpName.value,
    email: signUpEmail.value,
    password: signUpPassWord.value,
  };
  if (
    inputData.userName == "" ||
    inputData.email == "" ||
    inputData.password == ""
  ) {
    document.getElementById("exist").innerHTML = "All inputs is required";
    pExist.classList.add("text-danger");
  } 
  else 
  {
  if (foundEmail(inputData.email) == true) 
  {
    document.getElementById("exist").innerHTML = "email already exists";
    pExist.classList.add("text-danger");
  }
  else
  {
    data.push(inputData);
    localStorage.setItem(`dataStore`, JSON.stringify(data));
    document.getElementById("exist").innerHTML = "Success";
    pExist.classList.remove("text-danger");
    pExist.classList.add("text-success");
  }
  }
});

function foundEmail(email) {
  for (let i = 0; i < data.length; i++) {
    if (email == data[i].email) {
      return true;
    }
  }
}






signUpName.addEventListener("blur", function () {
  this.style.color = "#fff";
});
signUpEmail.addEventListener("blur", function () {
  this.style.color = "#fff";
});
signUpPassWord.addEventListener("blur", function () {
  this.style.color = "#fff";
});
