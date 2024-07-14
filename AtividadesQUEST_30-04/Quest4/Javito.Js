const salario = document.getElementById("Salario");
const aumento = document.getElementById("AumentodeSalario");
const labelPorcentagem = document.getElementById("porcentagemdeAmento");
const botaocalcular = document.getElementById("Calc");

salario.addEventListener('keypress', function(event){
    if(!/[0-9]/.test(event.key)){
                event.preventDefault();
        }
});

aumento.addEventListener('keypress', function(event){
    if(!/[0-9]/.test(event.key)){
        event.preventDefault();
    }
});

botaocalcular.addEventListener('click', function(){
    const valorSalarioo = parseFloat(salario.value);
    const valorAumento = parseFloat(aumento.value);

    if(!isNaN(valorSalarioo) && !isNaN(valorAumento) && valorSalarioo > 0){
        const novosalario = valorSalarioo + valorAumento;
        const porcentagemAumento = (valorAumento / valorSalarioo) * 100;
        porcentagemdeAmento.textContent = `${porcentagemAumento.toFixed(2)}%`;

        salario.value = '';
        aumento.value = '';
    }
});