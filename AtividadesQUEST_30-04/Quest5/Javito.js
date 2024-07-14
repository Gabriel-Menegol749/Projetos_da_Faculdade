document.addEventListener('DOMContentLoaded', function(){
    const inputMensagem = document.getElementById("inputMensagem");
    const botaoEnviar = document.getElementById("EnvioMensagem");
    const campoMensagens = document.querySelector(".campoDeMensagens");

    botaoEnviar.addEventListener('click', function(){
        const mensagem = inputMensagem.value.trim();
        if(mensagem !== ''){
            enviarMensagem(mensagem);
        }
        inputMensagem.value = '';
    });

    function enviarMensagem(mensagem){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mensagem })
        };

        fetch('/mensagem', options)
            .then(response => {
                if(response.ok){
                    console.log('Mensagem enviada!');
                    return response.text();
                } else {
                    throw new Error('Erro ao enviar a mensagem!');
                }
            })
            .then(data => {
                console.log(data);
                exibirMensagemEnviada(mensagem);
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao enviar a mensagem!');
            });
    }

    function exibirMensagemEnviada(mensagem){
        const div = document.createElement('div');
        div.textContent = mensagem;
        campoMensagens.appendChild(div);
    }
});
