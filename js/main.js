// Calculator Challenge Javascript author: Sara Lutes 9/16/22

function clearScreen() {
    document.getElementById("result").value = "";
};


function display(value) {
    document.getElementById("result").value += value;
};

function calculate() {
    var calculation = document.getElementById("result").value;
    var calculationResult = eval(calculation);
    document.getElementById("result").value = calculationResult;
};