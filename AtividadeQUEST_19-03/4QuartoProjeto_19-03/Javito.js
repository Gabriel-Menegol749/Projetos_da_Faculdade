const quadrados = document.querySelectorAll(".quadrado");

const botaoAumenta = document.getElementById("AumentaTamanho");
const botaoDiminui = document.getElementById("DiminuiTamanho");
const botaoDefault = document.getElementById("defalut");

botaoDefault.style.display ="none";

botaoAumenta.addEventListener('click', function(){
    quadrados.forEach(quadrados => {
        quadrados.style.width = '400px';
        quadrados.style.height = '400px';
    });
    botaoDefault.style.display ="block";
})

botaoDiminui.addEventListener('click', function(){
    quadrados.forEach(quadrados => {
        quadrados.style.width = '50px';
        quadrados.style.height = '50px';
    });
    botaoDefault.style.display ="block";
})

botaoDefault.addEventListener('click', function(){
    quadrados.forEach(quadrados => {
        quadrados.style.width = '200px';
        quadrados.style.height = '200px';
    });
    botaoDefault.style.display ="none";
})