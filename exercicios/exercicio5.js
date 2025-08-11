let velocidade = Number(prompt("Digite a velocidade do automóvel."));

if(velocidade > 80) {
    let multa = (velocidade - 80) * 5;
    alert("Você foi multado em R$" + multa + ".");
}