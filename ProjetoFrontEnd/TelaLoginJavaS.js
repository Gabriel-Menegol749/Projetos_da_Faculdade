const botaoCadastro = document.getElementById("cadastro");
const inputSenha = document.getElementById("senha");
const botaoRevelaSenha = document.getElementById("RevelaSenha");
const iconeOlho = document.getElementById("olhoIcon");
const botaoLogar = document.getElementById("Entrar");

botaoCadastro.addEventListener("click", function(){
    window.location.href = "TelaPlanosRegistroHTML.html";
});
botaoLogar.addEventListener("click", function(){
    window.location.href = "TelaPrincipalMaxHTML.html"
});

botaoRevelaSenha.addEventListener("click", function(){
    if(inputSenha.type === 'password'){
        inputSenha.type = 'text';
        iconeOlho.src = "Sheets/eye-slash-solid.svg";
    } else{
        inputSenha.type = 'password';
        iconeOlho.src ="Sheets/eye-solid.svg";
    }
});

/*TENHO QUE ADICIONAR FUNÇÃO DE VERIFICAÇÃO DE EMAIL E SENHA DE CLIENTES CADASTRADOS*/