let opcao = Number(prompt("[1] Celsius -> Fahrenheit \n [2] Fahrenheit -> Celsius"));
let temperatura = Number(prompt("Digite a temperatura."));
let temperatura_nova;

if(opcao == 1) {
    temperatura_nova = (temperatura * 9/5) + 32;
    alert(temperatura + "°C = " + temperatura_nova + "°F");
} else if(opcao == 2) {
    temperatura_nova = (temperatura - 32) / (9/5);
    alert(temperatura + "°F = " + temperatura_nova + "°C");
}