let distancia = Number(prompt("Digite a distância, em km, que deseja percorrer."));
let preco;

if(distancia <= 200) {
    preco = distancia / 2;
} else {
    preco = distancia * 0.45;
}

alert("O preço da viagem é: " + preco);
