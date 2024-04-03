let logado = false;
    function logarSite(){


        const somefaçalogin = document.getElementById('façalogin');

        if(logado){
            const mudabotao = document.getElementById('botaologindeslogin')
            mudabotao.innerText = "Login."

            const destino = document.querySelector('#nomeuser');
            destino.innerText = "Seja Bem-Vindo!";


            somefaçalogin.style.display = 'block';
            logado = false;

            alert ("Você saiu do site.");

        } else {
            const nomeusuario = prompt("Confirme Seu nome");

            const destino = document.querySelector('#nomeuser');
            destino.innerText = "Seja Bem-vindo, "+nomeusuario

            const mudabotao = document.getElementById('botaologindeslogin')
            mudabotao.innerText = "Logout."

            const somefaçalogin = document.getElementById('façalogin');

            somefaçalogin.style.display = 'none';
            logado = true;

        }
    }