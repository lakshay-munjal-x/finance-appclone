let btn = document.getElementById("themebtn");


    btn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            btn.innerText = "☀️";
        } else {
            btn.innerText = "🌙";
        }
    });


const emailInput = document.getElementById("user");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", function () {
    if (!emailInput.value.includes("@")) {
         emailError.textContent = "Email should contain @";
        } else {
            emailError.textContent = "";
    }
});

const name1 = document.getElementById("name");
const email = document.getElementById("user")
const Error = document.getElementById("error");
const btn1 = document.getElementById("btn")

btn1.addEventListener("click", function () {
    console.log(name1.textContent)
    if (name1.value === "") {
        Error.textContent = "Please Enter Your Name";
        } else if (email.textContent === "") {
        Error.value = "Please Enter Your Email";
    }else{
        Error.textContent = "";
    }
});