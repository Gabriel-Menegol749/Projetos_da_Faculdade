    const abalateral = document.querySelector('.abalateral');
    const lista = document.getElementById('lista');
    const botao = document.getElementById('botãoabrefechaaba');
    const logo = document.getElementById('logodaaba');

    botao.addEventListener('click', abreaba);
    logo.addEventListener('click', abreaba);

    function abreaba(){
        if (!abalateral.style.left || abalateral.style.left === '-200px'){
            abalateral.style.left = '0';
        } else{
            abalateral.style.left = '-200px';
        }
    }