let ano_nasc = Number(prompt("Digite o seu ano de nascimento."));
let ano_atual = 2025;

if(ano_atual - ano_nasc < 16) {
    alert("Você não está apto a votar.");
} else {
    alert("Você pode votar.");
}