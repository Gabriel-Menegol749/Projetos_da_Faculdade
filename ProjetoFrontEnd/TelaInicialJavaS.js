
    /*Botões dos demais arquivos*/
    const botaoEntrar = document.getElementById("ENTRAR");
    const botaoRegistrar = document.getElementById("ASSINAR");
    const botaoRegistrarPubInicial = document.getElementById("Assinaturas")

    Assinaturas

    botaoEntrar.addEventListener("click", function(){
        window.location.href ="TelaLoginHTML.html";
    });

    botaoRegistrar.addEventListener("click", function(){
        window.location.href="TelaPlanosRegistroHTML.html";
    });
    botaoRegistrarPubInicial.addEventListener("click", function(){
        window.location.href="TelaPlanosRegistroHTML.html";
    });
    /*Planos Financeiros*/
    const botaoFinanceiroMensal = document.getElementById('planosMensais');
    const botaoFinanceiroAnual = document.getElementById('planosAnuais');
    const botoesdosPlanos = document.querySelector('.botoesdosPlanos');
    const precoExplic = document.querySelectorAll(".precoExplic");
    const precoPlano1 = document.getElementById("precoPlano1");
    const precoPlano2 = document.getElementById("precoPlano2");
    const precoPlano3 = document.getElementById("precoPlano3");


    botaoFinanceiroAnual.addEventListener('click', function() {
        botaoFinanceiroAnual.classList.add('botaoSelecionado');
        botaoFinanceiroMensal.classList.remove('botaoSelecionado');

        botaoFinanceiroAnual.style.backgroundColor = "white";
        botaoFinanceiroAnual.style.color = "black";
        precoExplic.forEach(element =>{
            element.style.display = "block";
        });
        botoesdosPlanos.classList.add("bordaAtivada");

        botaoFinanceiroMensal.style.backgroundColor = "#00599d";
        botaoFinanceiroMensal.style.color = "white"
        precoPlano1.innerHTML = "<span>12x R$18,90</span>/mês"
        precoPlano2.innerHTML = "<span>12x R$29,90</span>/mês"
        precoPlano3.innerHTML = "<span>12x R$39,90</span>/mês"
    });

    botaoFinanceiroMensal.addEventListener('click', function() {
        botaoFinanceiroMensal.classList.add('botaoSelecionado');
        botaoFinanceiroAnual.classList.remove('botaoSelecionado');

        botaoFinanceiroMensal.style.backgroundColor = "white";
        botaoFinanceiroMensal.style.color = "black";
        precoExplic.forEach(element =>{
            element.style.display = "none";
        });
        botoesdosPlanos.classList.add("bordaAtivada");

        botaoFinanceiroAnual.style.backgroundColor = "#00599d";
        botaoFinanceiroAnual.style.color = "white";
        precoPlano1.innerHTML = "<span>R$29,90</span>/mês"
        precoPlano2.innerHTML = "<span>R$39,90</span>/mês"
        precoPlano3.innerHTML = "<span>R$55,90</span>/mês"
    });

    document.addEventListener('click', function(event){
        if(!event.target.closest('.botoesdosPlanos')){
            botoesdosPlanos.classList.remove("bordaAtivada");
        }
    });
