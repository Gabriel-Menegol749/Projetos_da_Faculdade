const botaoEntrar = document.getElementById("entrar");

botaoEntrar.addEventListener("click", function(){
    window.location.href = "TelaLoginHTML.html";
})

const inputSenha = document.getElementById("senha");
const botaoRevelaSenha = document.getElementById("RevelaSenha");
const iconeOlho = document.getElementById("olhoIcon");

botaoRevelaSenha.addEventListener("click", function(){
    if(inputSenha.type === 'password'){
        inputSenha.type = 'text';
        iconeOlho.src = "Sheets/eye-slash-solid.svg";
    } else{
        inputSenha.type = 'password';
        iconeOlho.src ="Sheets/eye-solid.svg";
    }
});


const botaoCriarConta = document.getElementById("CriarConta");

botaoCriarConta.addEventListener("click", function(){
    /*Adicionar verificação de inputs*/
    window.location.href = "TelaPrincipalMaxHTML.html"
});