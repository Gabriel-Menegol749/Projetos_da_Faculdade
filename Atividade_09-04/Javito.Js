const botaoMenu = document.getElementById("botaomenu");
const lista = document.getElementById("Lista");

botaoMenu.addEventListener('mouseenter', function(){
    lista.style.display = 'block';
})
botaoMenu.addEventListener('mouseleave', function(){
    lista.style.display = 'none';
})