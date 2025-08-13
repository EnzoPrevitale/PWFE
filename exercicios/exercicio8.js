let ano = Number(prompt("Digite um ano."));

if(ano % 100 != 0) {
    if(ano % 4) {
        alert("O ano é bissexto.");
    }
} else {
    if(ano % 400 == 0) {
        alert("O ano é bissexto.");
    } else {
        alert("O ano não é bissexto.");
    }
}
