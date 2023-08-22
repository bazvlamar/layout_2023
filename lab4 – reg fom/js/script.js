let regFormOpen = document.getElementById("reg");
let overlay = document.getElementById("overlay");
let regForm = document.getElementById("regForm");
let closeButton = document.getElementById("closeButton");
let pass1 = document.getElementById("pass1");
let massage = document.getElementById("message");
// Абзаци підказок для пароля
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");



regFormOpen.addEventListener("click",
function () {
    overlay.style.display = "flex";
    regForm.style.display = "flex";
}
)

closeButton.addEventListener("click",
function () {
    overlay.style.display = "none";
    regForm.style.display = "none";
}
)

pass1.addEventListener("focus",
    () => {
        message.style.display = "block";
    }
)

pass1.addEventListener("blur",
    () => {
        message.style.display = "none";
    }
)

pass1.addEventListener("keyup", 
    () => {
        // Перевірка на наявність однієї маленької літери
        let lowerCasesletter = /[a-z]/g;
        if (pass1.value.match(lowerCasesletter)) {
            letter.classList.add("valid");
            letter.classList.remove("invalid");
        } else {
            letter.classList.add("invalid");
            letter.classList.remove("valid");
        }

        let capitalCasesletter = /[A-Z]/g;
        if (pass1.value.match(capitalCasesletter)) {
            capital.classList.add("valid");
            capital.classList.remove("invalid");
        } else {
            capital.classList.add("invalid");
            capital.classList.remove("valid");
        }

        let numbers = /[0-9]/g;
        if (pass1.value.match(numbers)) {
            number.classList.add("valid");
            number.classList.remove("invalid");
        } else {
            number.classList.add("invalid");
            number.classList.remove("valid");
        }

        if (pass1.value.length >= 8 ) {
            length.classList.add("valid");
            length.classList.remove("invalid");
        } else {
            length.classList.add("invalid");
            length.classList.remove("valid");
        }
        


    }
)