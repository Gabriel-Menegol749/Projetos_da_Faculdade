function AddNomeLista(){
    const inputNome = document.getElementById("nome").value;
    const SexoSelecionado = document.querySelector('input[name="Sexo"]:checked');
    const listaPessoas = document.getElementById("listadePessoas");

    if(inputNome.trim() === ""){
        alert("Por favor, insira um nome!");
        return;
    }

    if(SexoSelecionado === null){
        alert("Selecione um Gênero, Por favor!");
        return;
    }

    const nomeADDIC = document.createElement("li");
    const textoGenero = document.createElement("span");
    const BotãoExcluirNome = document.createElement("button");


    nomeADDIC.textContent = inputNome;
    textoGenero.textContent = ` - ${SexoSelecionado.value.charAt(0).toUpperCase()}`;
    BotãoExcluirNome.textContent = "❌";

    BotãoExcluirNome.style.border = "none";
    BotãoExcluirNome.style.background = "none";



    switch(SexoSelecionado.value){
        case "Homem":
            nomeADDIC.style.color = "blue";
            break;
        case "Mulher":
            nomeADDIC.style.color = "rgb(255, 0, 128)";
            break;
        case "Nãobin":
            nomeADDIC.style.color = "yellow";
            break;
        case "Nãoident":
            nomeADDIC.style.color = "black";
            break;
        case "Transexual":
            nomeADDIC.style.color = "red";
            break;
        case "Outros":
            nomeADDIC.style.color = "green";
            break;
    }

    BotãoExcluirNome.addEventListener("click", function(){
    listaPessoas.removeChild(nomeADDIC);
    });

    nomeADDIC.appendChild(textoGenero);
    nomeADDIC.appendChild(BotãoExcluirNome);
    listaPessoas.appendChild(nomeADDIC);
    document.getElementById("nome").value = "";

    const radioButtons = document.querySelectorAll('input[name="Sexo"]');
    radioButtons.forEach(radioButton => {
        radioButton.checked = false;
    });
}

function LimpaLista(){
    const listaPessoas = document.getElementById("listadePessoas");

    if (listaPessoas.children.length === 0) {
        alert("A lista já está vazia!");
        return;
    }

    const listadePessoas = document.getElementById("listadePessoas");
    listadePessoas.innerHTML = "";
}