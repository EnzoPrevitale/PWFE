let ano = Number(prompt("Digite um ano."));

if(ano % 100 != 0) {
    if(ano % 4) {
        alert("O ano é bissexto.");
    }
}