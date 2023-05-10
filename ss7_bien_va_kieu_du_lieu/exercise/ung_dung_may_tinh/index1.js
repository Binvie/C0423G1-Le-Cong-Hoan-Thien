// let numb1 = +document.getElementById("number1");
// let numb2 = +document.getElementById("number2");
// function plus() {
//     let total = +numb1.value + +numb2.value
//     document.write('total' + total)
//
// }


function plus () {
    let numb1 = +document.getElementById("number1").value;
    let numb2 = +document.getElementById("number2").value;
    let total = numb1 + numb2;
    document.write(' total : '+ total );
}
function subtract() {
    let numb1 = document.getElementById("number1").value;
    let numb2 = document.getElementById("number2").value;
    let total = numb1 - numb2;
    document.write(' total : ' + total);

}
function multipleNum() {
    let numb1 = document.getElementById("number1").value;
    let numb2 = document.getElementById("number2").value;
    let total = numb1 * numb2;
    document.write(' total : ' + total)

}
function divide() {
    let numb1 = document.getElementById("number1").value;
    let numb2 = document.getElementById("number2").value;
    let total = numb1 / numb2;
    document.write(' total : ' + total)
}

