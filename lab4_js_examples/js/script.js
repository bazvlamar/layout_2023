
//let jindex = 4;

// Діагональ пряма
// for (let index = 0; index < arrayRows; index++) {
   
//     let row = tab.rows[index]; 
//     row.cells[index].style.background = "red";
  
// }

// Зворотня діагональ (метод Максима) з виконанням по кліку
document.getElementById("makeItRed").addEventListener("click",
function makeItRed() {
    let tab  = document.getElementById("table1");
    let arrayRows = tab.rows.length;
    for (let index = 0; index < arrayRows; index++) {
    let row = tab.rows[index]; 
    row.cells[arrayRows - index - 1].style.background = "red";
  
}
}
);

document.getElementById("makeItWhite").addEventListener("click",
function makeItWhite() {
    let tab  = document.getElementById("table1");
    let arrayRows = tab.rows.length;
    for (let index = 0; index < arrayRows; index++) {
    let row = tab.rows[index]; 
    row.cells[arrayRows - index - 1].style.background = "white";
  
}
}
);







//Зворотня діагональ (з другим індексом)
// for (let index = 0, jindex = arrayRows-1; index < arrayRows && jindex >= 0 ; index++, jindex--) {
 
//     let row = tab.rows[index]; 
//     row.cells[jindex].style.background = "red";
  
// }

// Зворотня діагональ (метод зі змінною)
// for (let index = 0; index < arrayRows; index++) {
//     let row = tab.rows[index]; 
//     row.cells[jindex].style.background = "red";
//     jindex--;
// }

//  document.getElementById("table1").rows[1].cells[1].style.background = "green";
//  document.getElementById("table1").rows[2].cells[2].style.background = "green";


// let num1 = Number(document.getElementById("num1").value);
// let num2 = Number(document.getElementById("num2").value);

// function plus() {
//     let num1 = +document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     let result = num1+num2;
//     document.getElementById("res").innerHTML = result;
// }


let res = document.getElementById("res");

document.getElementById("plus").addEventListener("click", 
function plus() {
    let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
    res.innerHTML = (num1 + num2);
}
);

document.getElementById("minus").addEventListener("click", 
function minus() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    res.innerHTML = (num1 - num2);
  
}
);

document.getElementById("multi").addEventListener("click", 
function multi() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    res.innerHTML = (num1 * num2);
  
}
);

document.getElementById("divide").addEventListener("click", 
function divide() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    res.innerHTML = (num1 / num2);
  
}
);




function clock() {

    let currentDate = new Date();
    // Додати дату
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
     if (currentMonth < 10) {
        currentMonth = "0" + currentMonth;
    }
    let currentDay = currentDate.getDate();
     if (currentDay < 10) {
        currentDay = "0" + currentDay;
    }
    
    // Додати час
    // getHours(), getMinutes(), getSeconds(), getMilliseconds()
    // Отримати відповідні компоненти часу.
    
    let currentHour = currentDate.getHours(), currentMinute = currentDate.getMinutes(), 
    currentSecond = currentDate.getSeconds(), currentMillisecond = currentDate.getMilliseconds();
    if (currentSecond < 10) {
        currentSecond = "0" + currentSecond;
    }
    
   
    document.getElementById("clock").innerHTML = currentDay + ":" +  currentMonth + ":" + currentYear + 
"<br />" + currentHour  + ":" + currentMinute + ":" + currentSecond;
}

setInterval(clock, 1000);



// Гра вгадай число

let randomNumber = Math.floor(Math.random()*100); // Генерує число рандомне від 1 до 100
document.getElementById("restart").hidden = true;

document.getElementById("checkBtn").addEventListener("click",

function () {
    let guessNumber = Number(document.getElementById("guessNumber").value);
    if (randomNumber == guessNumber) {
       document.getElementById("showResults").innerHTML += "<span id='rightAnswer'>Вітаю, ви вгадали!</span><br />";
       document.getElementById("restart").hidden = false;
    } else if (randomNumber > guessNumber) {
        document.getElementById("showResults").innerHTML += "Загадане число більше! <br />";
    } else if (randomNumber < guessNumber) {
        document.getElementById("showResults").innerHTML += "Загадане число менше! <br />";
    }
    
}
)

document.getElementById("restart").addEventListener("click", 
function () {
    document.getElementById("showResults").innerHTML = "";
    randomNumber = Math.floor(Math.random()*100);
    document.getElementById("restart").hidden = true;
}

)











