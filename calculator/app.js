const display = document.getElementById("display");

function appendToScreen(input){
    display.value+=input;
}

function clearScreen(){
    display.value="";
}

function calculateExpression()
{
    display.value = eval(display.value);
}


function deleteExpression()
{
    displayValue = display.value;
    display.value = displayValue.slice(0,-1);
}