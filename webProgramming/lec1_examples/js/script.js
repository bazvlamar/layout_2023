
// console.log("Hello, I am externel script!");

// let userName = "Volodymyr";
// console.log("Hello, " + userName);

// userName = "Oleksandr";
// console.log("Hello, " + userName);




// let divContent = document.getElementById("d1").innerHTML;
// console.log(divContent);
// /*
// Ця функція блаблабла....
// */
// document.getElementById("d1").style.backgroundColor="#9c9c9c";
// document.getElementById("d1").style.color="#fff";
// document.getElementById("d1").style.height="50px"; // Вибираємо елемент з ідентифікатором d1 та надаємо йому висоту 50px



// let example_number = 5;
// example_number = 7.5;

// let example_string = "Hello";
// let example_boolean = false;


// let x = 5;
// let y = 10;
// let result = x + y;

// console.log(result);

// alert("Hello!!!");
// alert("Hi!");
// alert("Здоровенькі, були!");

// let userName = prompt("Привіт, як вас звати?","ім'я");
// alert ("Привіт, " + userName);

// let likeJs = confirm("Вам подобається JS?");
// alert(likeJs);


// let x = prompt("Введіть перше число");
// let y = prompt("Введіть друге число");
// x = parseFloat(x);
// y = Number(y);
// let res = x + y;
// alert("Сума двох чисел дорівнює: "+ res);



// let isYear = prompt("В якому році Україна стала незалежною?");


// if (isYear === null){
//     document.getElementById("d1").innerHTML = "Введіть значення!";
//     document.getElementById("d1").style.fontSize = "150px";
//     document.getElementById("d1").style.color = "White";
//     document.getElementById("d1").style.backgroundColor = "Gray";
//     document.getElementById("d1").style.textAlign = "center";
// }
// else if (Number(isYear) == 1991) {
//     document.getElementById("d1").innerHTML = "Вірно!";
//     document.getElementById("d1").style.fontSize = "150px";
//     document.getElementById("d1").style.color = "Yellow";
//     document.getElementById("d1").style.backgroundColor = "Green";
//     document.getElementById("d1").style.textAlign = "center";
// } else if (Number(isYear) > 1991) {
//     document.getElementById("d1").innerHTML = "Ні, раніше!";
//     document.getElementById("d1").style.fontSize = "150px";
//     document.getElementById("d1").style.color = "Black";
//     document.getElementById("d1").style.backgroundColor = "Red";
//     document.getElementById("d1").style.textAlign = "center";
// } else if (Number(isYear) < 1991) {
//     document.getElementById("d1").innerHTML = "Ні, пізніше!";
//     document.getElementById("d1").style.fontSize = "150px";
//     document.getElementById("d1").style.color = "Black";
//     document.getElementById("d1").style.backgroundColor = "Red";
//     document.getElementById("d1").style.textAlign = "center";
// }


let userName = prompt("Введіть логін");

if (userName == "Адмін") {
    
    let userPassword = prompt("Введіть пароль");
    if (userPassword == "123456") {
        alert("Вітаємо на сайті!");
        document.body.style.backgroundColor = "#235500";
    } else if (userPassword == null) {
        alert("Вхід скасовано");
    } else {
        alert("Пароль не вірний!");
    }

} else if (userName == null) {
    alert("Вхід скасовано");
} else {
    alert("Я вас не знаю");
}