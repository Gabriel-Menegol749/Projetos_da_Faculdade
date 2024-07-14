const textoMuda = document.getElementById("textoAlt");
const botaoLogin = document.getElementById("botaoLogin");
const inputSenha = document.getElementById("Senha");
const dados = document.getElementById("dados");
const campoInputNome = document.getElementById("nomeLogin");
const nomeUsuario = campoInputNome.value;


botaoLogin.addEventListener('click', function(){
    const nomeUsuario = campoInputNome.value;

    if (botaoLogin.innerText === 'Login.') {
        dados.style.display = 'none';
        textoMuda.innerText = nomeUsuario;
        botaoLogin.innerHTML = 'Logout';
    } else {
        dados.style.display = 'block';
        textoMuda.innerText = 'Faça Seu Login';
        campoInputNome.value = '';
        botaoLogin.innerHTML = 'Login.';
        inputSenha.value = '';
    }
});

