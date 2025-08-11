let idade = Number(prompt("Digite a sua idade."));
let classificacao;

if(idade < 2) {
    classificacao = "Bebê";
} else if(idade < 13) {
    classificacao = "Criança";
} else if(idade < 18) {
    classificacao = "Adolescente";
} else if(idade < 60) {
    classificacao = "Adulto";
} else {
    classificacao = "Idoso";
}

alert("Você é " + classificacao.toLowerCase() + ".");