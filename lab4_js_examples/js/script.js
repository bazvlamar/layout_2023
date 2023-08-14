
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