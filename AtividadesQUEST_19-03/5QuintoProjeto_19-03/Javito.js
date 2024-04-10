const quadrados = document.querySelectorAll(".quadrado");

//botõesprincipais
const botaoAumenta = document.getElementById("AumentaTamanho");
const botaoDiminui = document.getElementById("DiminuiTamanho");
const botaoDefault = document.getElementById("defalut");

//blocos
const blocovermelho = document.getElementById("vermelho");
const blocoverde = document.getElementById("verde");
const blocoazul = document.getElementById("azul");
const blocopreto = document.getElementById("preto");


//vermelho individual--
    function aumentavermelho(){
        blocovermelho.style.width = '400px'
        blocovermelho.style.height = '400px'
    }
    function diminuivermelho(){
        blocovermelho.style.width = '50px'
        blocovermelho.style.height = '50px'
    }
    function defaultvermelho(){
        blocovermelho.style.width = '200px'
        blocovermelho.style.height = '200px'
    }
//vermelho individual//

//verde individual--
    function aumentaverde(){
        blocoverde.style.width = '400px'
        blocoverde.style.height = '400px'

    }
    function diminuiverde(){
        blocoverde.style.width = '50px'
        blocoverde.style.height = '50px'
    }
    function defaultverde(){
        blocoverde.style.width = '200px'
        blocoverde.style.height = '200px'
    }
//vermelho individual//

//azul individual--
    function aumentaazul(){
        blocoazul.style.width = '400px'
        blocoazul.style.height = '400px'
    }
    function diminuiazul(){
        blocoazul.style.width = '50px'
        blocoazul.style.height = '50px'
    }
    function defaultazul(){
        blocoazul.style.width = '200px'
        blocoazul.style.height = '200px'
    }
//azul individual//

//preto individual--
    function aumentapreto(){
        blocopreto.style.width = '400px'
        blocopreto.style.height = '400px'
    }
    function diminuipreto(){
        blocopreto.style.width = '50px'
        blocopreto.style.height = '50px'
    }
    function defaultpreto(){
        blocopreto.style.width = '200px'
        blocopreto.style.height = '200px'
    }

//vermelho individual//


//TOdos os Blocos:

botaoAumenta.addEventListener('click', function(){
    quadrados.forEach(quadrados => {
        quadrados.style.width = '400px';
        quadrados.style.height = '400px';
    });
})

botaoDiminui.addEventListener('click', function(){
    quadrados.forEach(quadrados => {
        quadrados.style.width = '50px';
        quadrados.style.height = '50px';
    });
})

botaoDefault.addEventListener('click', function(){
    quadrados.forEach(quadrados => {
        quadrados.style.width = '200px';
        quadrados.style.height = '200px';
    });

})

