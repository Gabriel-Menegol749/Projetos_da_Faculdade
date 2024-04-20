const botaoCadastro = document.getElementById("cadastro");
const inputSenha = document.getElementById("senha");
const botaoRevelaSenha = document.getElementById("RevelaSenha");
const iconeOlho = document.getElementById("olhoIcon");

botaoCadastro.addEventListener("click", function(){
    window.location.href = "TelaRegistroHTML.html";
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
