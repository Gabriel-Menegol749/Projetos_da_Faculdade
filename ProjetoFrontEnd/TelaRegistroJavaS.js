const botaoEntrar = document.getElementById("entrar");
botaoEntrar.addEventListener("click", function(){
    window.location.href = "TelaLoginHTML.html";
})



/*Verificação de Registro */
const inputEmail = document.getElementById("inputEmail");
const inputRepeteEmail = document.getElementById("inputEmailRepete");
const inputSenha = document.getElementById("senhaConta");
const inputNome = document.getElementById("nome");
const inputSobrenome = document.getElementById("Sobrenome");

const botaoCriarConta = document.getElementById("CriarConta");
const avisoErroVerific = document.getElementById("aviso");





/*Final da verificação de registro*/


botaoCriarConta.addEventListener("click", function(){

    window.location.href = "TelaPrincipalMaxHTML.html";
})
/*Botão revela senha*/
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
/*fim Botão revela senha*/