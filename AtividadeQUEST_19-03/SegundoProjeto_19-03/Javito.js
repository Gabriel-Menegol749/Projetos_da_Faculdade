
const numeroatual = document.querySelector(".Valor");

function Addnum(){
    const valornovo = parseInt(numeroatual.innerText);
    numeroatual.innerText = valornovo + 1;
}


function Tiranum(){
    const valornovo = parseInt(numeroatual.innerText);
    numeroatual.innerText = valornovo - 1;
}
