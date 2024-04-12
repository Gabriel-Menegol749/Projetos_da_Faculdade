const botaoMenu = document.getElementById("botaomenu");
const menu = document.querySelector(".menu");
const lista = document.getElementById("Lista");

botaoMenu.addEventListener('mouseenter', function() {
    menu.style.left = "0px";
    lista.style.display = "block";
});

menu.addEventListener('mouseleave', function() {
    menu.style.left = "-200px";
    lista.style.display = "none";
});
