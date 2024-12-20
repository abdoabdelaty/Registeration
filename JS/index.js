let signInEmail = document.getElementById("sign-in-email");
let signInPassWord = document.getElementById("sign-in-password");
let btnLogin = document.getElementById("btn-login");
let pCorrect = document.getElementById("input-incorrect");
let data = [];
if (localStorage.getItem("dataStore") !== null) {
  data = JSON.parse(localStorage.getItem("dataStore"));
}

btnLogin.addEventListener("click", function () {
  if (
    foundEmail(signInEmail.value) == true &&
    foundPassWord(signInPassWord.value) == true
  ) {
    for (let i = 0; i < data.length; i++) {
      if (signInEmail.value == data[i].email) {
        localStorage.setItem(`userName`, JSON.stringify(data[i].userName));
        break;
      }
    }
    
    window.location.href = `./home.html`;
  } else {
    if (signInEmail.value == "" || signInPassWord.value == "") {
      document.getElementById("input-incorrect").innerHTML =
        "All inputs is required";
      pCorrect.classList.add("text-danger");
    } else {
      document.getElementById("input-incorrect").innerHTML =
        "incorrect email or password";
      pCorrect.classList.add("text-danger");
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
function foundPassWord(pass) {
  for (let i = 0; i < data.length; i++) {
    if (pass == data[i].password) {
      return true;
    }
  }
}

signInEmail.addEventListener("blur", function () {
  this.style.color = "#fff";
});
signInPassWord.addEventListener("blur", function () {
  this.style.color = "#fff";
});
