const CorTEXTO = document.getElementById("cortexto");
const CorBACKGROUND = document.getElementById("corbackground");
const background = document.getElementById("background");
const texto = document.getElementById("Texto");

CorTEXTO.addEventListener('input', function(){
    texto.style.color = CorTEXTO.value;
})

CorBACKGROUND.addEventListener('input', function(){
    background.style.backgroundColor = CorBACKGROUND.value;
})

