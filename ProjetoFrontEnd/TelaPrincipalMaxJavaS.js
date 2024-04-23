const botaoFilmeSerieSelecionado = document.getElementById("irParaConteudo");

    botaoFilmeSerieSelecionado.addEventListener("click", function(){
        window.location.href = "https://www.max.com/br/pt/shows/last-of-us/93ba22b1-833e-47ba-ae94-8ee7b9eefa9a";
    });
function vaitopoSIte(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

/*Banner Filmes Recomendados*/

/*Menu perfil */
const fotoperfilMenu = document.getElementById("LogoPerfilcabecalio");
const menuperfil = document.querySelector(".telaMenuUsuario");
const botaoLogout = document.getElementById("logout");

fotoperfilMenu.addEventListener('mouseenter', () =>{
    menuperfil.style.display = 'block';
});
menuperfil.addEventListener('mouseleave', () =>{
    menuperfil.style.display = 'none';
});
botaoLogout.addEventListener('click', function(){
    window.location.href = "TelaInicialHTML.html"
})






/*Recomendados*/
const recomendados = document.querySelector(".recomendados");
const botaoMostrarDireitarecomend = document.querySelector(".MostrarmaisDireitarecomend");
const botaoMostrarEsquerdarecomend = document.querySelector(".MostrarmaisEsquerdarecomend");

recomendados.addEventListener('mouseenter', ()=> {
    botaoMostrarDireitarecomend.style.display = 'block';
});

recomendados.addEventListener('mouseleave', ()=> {
    botaoMostrarDireitarecomend.style.display = 'none';
});

botaoMostrarDireitarecomend.addEventListener('click', function(){
    recomendados.scrollBy({
        left: 1200, behavior:'smooth'
    });
    botaoMostrarDireitarecomend.style.display = 'none';
    botaoMostrarEsquerdarecomend.style.display = 'block';
});

botaoMostrarEsquerdarecomend.addEventListener('click', function(){
    recomendados.scrollBy({
        left: -1200, behavior:'smooth'
    });
    botaoMostrarDireitarecomend.style.display = 'none';
    botaoMostrarEsquerdarecomend.style.display = 'block';
});
/*fim Recomendados*/

/*series*/
const series = document.querySelector(".Top10series");
const botaoMostrarDireitaseries = document.querySelector(".MostrarmaisDireitaseries");
const botaoMostrarEsquerdaseries = document.querySelector(".MostrarmaisEsquerdaseries");

series.addEventListener('mouseenter', ()=> {
    botaoMostrarDireitaseries.style.display = 'block';
});

series.addEventListener('mouseleave', ()=> {
    botaoMostrarDireitaseries.style.display = 'none';
});

botaoMostrarDireitaseries.addEventListener('click', function(){
    series.scrollBy({
        left: 1200, behavior:'smooth'
    });
    botaoMostrarDireitaseries.style.display = 'none';
    botaoMostrarEsquerdaseries.style.display = 'block';
});

botaoMostrarEsquerdaseries.addEventListener('click', function(){
    series.scrollBy({
        left: -1200, behavior:'smooth'
    });
    botaoMostrarDireitaseries.style.display = 'none';
    botaoMostrarEsquerdaseries.style.display = 'block';
});
/*fim series*/

/*filmes*/
const filmes = document.querySelector(".top10filmes");
const botaoMostrarDireitafilmes = document.querySelector(".MostrarmaisDireitafilmes");
const botaoMostrarEsquerdafilmes = document.querySelector(".MostrarmaisEsquerdafilmes");

filmes.addEventListener('mouseenter', ()=> {
    botaoMostrarDireitafilmes.style.display = 'block';
});

filmes.addEventListener('mouseleave', ()=> {
    botaoMostrarDireitafilmes.style.display = 'none';
});

botaoMostrarDireitafilmes.addEventListener('click', function(){
    filmes.scrollBy({
        left: 1200, behavior:'smooth'
    });
    botaoMostrarDireitafilmes.style.display = 'none';
    botaoMostrarEsquerdafilmes.style.display = 'block';
});

botaoMostrarEsquerdafilmes.addEventListener('click', function(){
    filmes.scrollBy({
        left: -1200, behavior:'smooth'
    });
    botaoMostrarDireitafilmes.style.display = 'none';
    botaoMostrarEsquerdafilmes.style.display = 'block';
});
/*fim filmes*/

