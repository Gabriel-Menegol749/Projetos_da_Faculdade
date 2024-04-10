const addPastel = document.getElementById("Adicionarpastel");
const remPastel = document.getElementById("Removerpastel");

const addTorrada = document.querySelector(".AdicionarTorrada");
const remTorrada = document.querySelector(".RemoverTorrada");

const addTorta = document.querySelector(".AdicionarTorta");
const remTorta = document.querySelector(".RemoverTorta");

const addRefrigerante = document.querySelector(".AdicionarRefrigerante");
const remRefrigerante = document.querySelector(".RemoverRefrigerante");

const addCafecmleite = document.querySelector(".AdicionarCafécmLeite");
const remCafecmleite = document.querySelector(".RemoverCafécmLeite");

const h1Compra = document.querySelector(".Compra");
const h1Gorjeta = document.querySelector(".Gorjeta");
const h1quantidadeItens = document.querySelector(".totaldeitens");
const h1TOTAL = document.querySelector(".total");

let quantidadePastel = 0;
let valorPastel = 5.50;

let quantidadeTorrada = 0;
let valorTorrada = 5.50;

let quantidadeTorta = 0;
let valorTorta = 9.50;

let quantidadeRefrigerante = 0;
let valorRefrigerante = 4.50;

let quantidadeCafe = 0;
let valorCafe = 3.50;

function calculosGERAIS() {
    let totalItens = quantidadePastel + quantidadeTorrada + quantidadeTorta + quantidadeRefrigerante + quantidadeCafe;
    let totalCOMPRA = (quantidadePastel * valorPastel) + (quantidadeTorrada * valorTorrada) + (quantidadeTorta * valorTorta) + (quantidadeRefrigerante * valorRefrigerante) + (quantidadeCafe * valorCafe);
    let Gorjeta = totalCOMPRA * 0.1;
    let TotalFinalCOmpra = totalCOMPRA + Gorjeta;

    return {
        totalItens: totalItens,
        totalCOMPRA: totalCOMPRA,
        Gorjeta: Gorjeta,
        TotalFinalCOmpra: TotalFinalCOmpra
    };
}

function atualizaTotalCompra() {
    let totais = calculosGERAIS();

    h1quantidadeItens.textContent = "Total de Itens: " + totais.totalItens;
    h1Compra.textContent = "Compra: R$" + totais.totalCOMPRA.toFixed(2);
    h1Gorjeta.textContent = "Gorjeta: R$" + totais.Gorjeta.toFixed(2);
    h1TOTAL.textContent = "Total: R$" + totais.TotalFinalCOmpra.toFixed(2);
}


function atualizarQuantidade(item, quantidade) {
    item.querySelector(".textoQuant").textContent = "Quantidade: " + quantidade;
}

addPastel.addEventListener('click', () => {
    quantidadePastel++;
    atualizarQuantidade(document.querySelector('.Item.Pastel'), quantidadePastel);
    atualizaTotalCompra();
});

remPastel.addEventListener('click', () => {
    if (quantidadePastel > 0) {
        quantidadePastel--;
        atualizarQuantidade(document.querySelector('.Item.Pastel'), quantidadePastel);
        atualizaTotalCompra();
    }
});

addTorrada.addEventListener('click', () => {
    quantidadeTorrada++;
    atualizarQuantidade(document.querySelector('.Item.Torrada'), quantidadeTorrada);
    atualizaTotalCompra();
});

remTorrada.addEventListener('click', () => {
    if (quantidadeTorrada > 0) {
        quantidadeTorrada--;
        atualizarQuantidade(document.querySelector('.Item.Torrada'), quantidadeTorrada);
        atualizaTotalCompra();
    }
});

addTorta.addEventListener('click', () => {
    quantidadeTorta++;
    atualizarQuantidade(document.querySelector('.Item.Torta'), quantidadeTorta);
    atualizaTotalCompra();
});

remTorta.addEventListener('click', () => {
    if (quantidadeTorta > 0) {
        quantidadeTorta--;
        atualizarQuantidade(document.querySelector('.Item.Torta'), quantidadeTorta);
        atualizaTotalCompra();
    }
});


addRefrigerante.addEventListener('click', () => {
    quantidadeRefrigerante++;
    atualizarQuantidade(document.querySelector('.Item.Refrigerante'), quantidadeRefrigerante);
    atualizaTotalCompra();
});

remRefrigerante.addEventListener('click', () => {
    if (quantidadeRefrigerante > 0) {
        quantidadeRefrigerante--;
        atualizarQuantidade(document.querySelector('.Item.Refrigerante'), quantidadeRefrigerante);
        atualizaTotalCompra();
    }
});

addCafecmleite.addEventListener('click', () => {
    quantidadeCafe++;
    atualizarQuantidade(document.querySelector('.Item.Café'), quantidadeCafe);
    atualizaTotalCompra();
});

remCafecmleite.addEventListener('click', () => {
    if (quantidadeCafe > 0) {
        quantidadeCafe--;
        atualizarQuantidade(document.querySelector('.Item.Café'), quantidadeCafe);
        atualizaTotalCompra();
    }
});
