const Celcius = document.getElementById("SliderCelcius");
const Fahrenheit = document.getElementById("SliderFahrenheit");

function CelciusParaF(Celsius) {
    return Celsius * 9 / 5 + 32;
}

function FahrenheitParaC(Fahrenheit) {
    return (Fahrenheit - 32) * 5 / 9;
}

Celcius.addEventListener("input", function () {
    const valorCelsius = parseInt(Celcius.value);
    const valorFahrenheit = CelciusParaF(valorCelsius);
    Fahrenheit.value = valorFahrenheit;
    document.getElementById("valorCel").innerText = `${valorCelsius}° C`;
    document.getElementById("valorFAH").innerText = `${valorFahrenheit.toFixed(2)}° F`;
})

Fahrenheit.addEventListener("input", function () {
    const valorFahrenheit = parseInt(Fahrenheit.value);
    const valorCelsius = FahrenheitParaC(valorFahrenheit);
    Celcius.value = valorCelsius;
    document.getElementById("valorFAH").innerText = `${valorFahrenheit}° F`;
    document.getElementById("valorCel").innerText = `${valorCelsius.toFixed(2)}° C`;
})
