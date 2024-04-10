
const numeroatual = document.querySelector(".Valor");


//Adição de números
function Addnum(){
    const valornovo = parseInt(numeroatual.innerText);
    numeroatual.innerText = valornovo + 1;
}

function AddCINCO(){
    const valornovo = parseInt(numeroatual.innerText);
    numeroatual.innerText = valornovo +5;
}


//Subtração de números
function Tiranum(){
    const valornovo = parseInt(numeroatual.innerText);
    numeroatual.innerText = valornovo - 1;
}


function TiraCINCO(){
    const valornovo = parseInt(numeroatual.innerText);
    numeroatual.innerText = valornovo -5;
}

