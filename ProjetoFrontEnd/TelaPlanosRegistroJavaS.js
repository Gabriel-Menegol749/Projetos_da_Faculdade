
const botaoPlanoMensal = document.getElementById("Mensal");
const botaoPlanoAnual = document.getElementById("AnualParcelado");
const plano1 = document.getElementById("preco1");
const plano2 = document.getElementById("preco2");
const plano3 = document.getElementById("preco3");

window.addEventListener('DOMContentLoaded', (event) => {
    botaoPlanoAnual.classList.add("botaoselecionado");
});


botaoPlanoMensal.addEventListener("click", function(){
    plano1.innerHTML = "<p id='valor'>R$29,90</span><span id='mes'>/mês</span>";
    plano2.innerHTML = "<p id='valor'>R$39,90</span><span id='mes'>/mês</span>";
    plano3.innerHTML = "<p id='valor'>R$55,90</span><span id='mes'>/mês</span>";

    botaoPlanoMensal.classList.add("botaoselecionado");
    botaoPlanoAnual.classList.remove("botaoselecionado");
});
botaoPlanoAnual.addEventListener("click", function(){
    plano1.innerHTML = "<p class='preco1' id='preco1'>12x<span id='valor'>R$18,90</span><span id='mes'>/mês</span><br><span id='precototalAnual'>Preço anual total R$226,80</span></p>";
    plano2.innerHTML = "<p class='preco2' id='preco2'>12x<span id='valor'>R$29,90</span><span id='mes'>/mês</span><br><span id='precototalAnual'>Preço anual total R$358,80</span></p>";
    plano3.innerHTML = "<p class='preco3' id='preco3'>12x<span id='valor'>R$39,90</span><span id='mes'>/mês</span><br><span id='precototalAnual'>Preço anual total R$478,80</span></p>";

    botaoPlanoAnual.classList.add("botaoselecionado");
    botaoPlanoMensal.classList.remove("botaoselecionado");
});

const avisoNaoSelecionado = document.getElementById("aviso");
const botaoContinuar = document.getElementById("continuar")
const DivPlano1 = document.getElementById("Plano1");
const DivPlano2 = document.getElementById("Plano2");
const DivPlano3 = document.getElementById("Plano3");

let opcaoSelecionada = null;

DivPlano1.addEventListener("click", function(){
    DivPlano1.classList.add("divPlanoselecionado");
    DivPlano2.classList.remove("divPlanoselecionado");
    DivPlano3.classList.remove("divPlanoselecionado");
    avisoNaoSelecionado.style.display = "none";
    opcaoSelecionada = DivPlano1;
});
DivPlano2.addEventListener("click", function(){
    DivPlano1.classList.remove("divPlanoselecionado");
    DivPlano2.classList.add("divPlanoselecionado");
    DivPlano3.classList.remove("divPlanoselecionado");
    avisoNaoSelecionado.style.display = "none";
    opcaoSelecionada = DivPlano2;
});
DivPlano3.addEventListener("click", function(){
    DivPlano1.classList.remove("divPlanoselecionado");
    DivPlano2.classList.remove("divPlanoselecionado");
    DivPlano3.classList.add("divPlanoselecionado");
    avisoNaoSelecionado.style.display = "none";
    opcaoSelecionada = DivPlano3;
});

botaoContinuar.addEventListener("click", () =>{
    if(opcaoSelecionada === null){
        avisoNaoSelecionado.style.display = "block";
    } else{
        window.location.href = "TelaRegistroHTML.html";
    }
})
