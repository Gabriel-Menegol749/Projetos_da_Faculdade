const planosDocumento = document.querySelectorAll(".Planos");
const avisoNaoSelecionado = document.getElementById("aviso");
const botaoContinuar = document.getElementById("continuar");

let opcaoSelecionada = null;

planosDocumento.forEach(plano => {
    plano.addEventListener("click", () => {
        planosDocumento.forEach(p => p.classList.remove("selecionado")); // Remover a classe "selecionado" de todas as opções
        plano.classList.add("selecionado"); // Adicionar a classe "selecionado" apenas à opção clicada
        opcaoSelecionada = plano;
    });
});


botaoContinuar.addEventListener("click", () =>{
    if(opcaoSelecionada === null){
        avisoNaoSelecionado.style.display = "block";
    } else{
        window.location.href = "TelaRegistroHTML.html";
    }
})