// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = Math.round((eval(display.value) + Number.EPSILON) * 10000 ) / 10000;
    }
    catch(error){
        displat.value = "Error";
    }
    
}