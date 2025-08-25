let sorteados = [];

let num_atual;
let btn = document.getElementById("sortear");
let listaB = document.getElementById("listaB");
let listaI = document.getElementById("listaI");
let listaN = document.getElementById("listaN");
let listaG = document.getElementById("listaG");
let listaO = document.getElementById("listaO");
let num = document.getElementById("num");

function random(n) {
    return Math.floor(Math.random() * n) + 1;
}

function sortear() {
    do {
        num_atual = random(75);
    } while(sorteados.includes(num_atual))
    
    sorteados.push(num_atual);
    sorteados.sort();
    
    let quadrado = document.getElementById(num_atual);
    quadrado.style.backgroundColor = "green";

    num.innerHTML = "<p>" + num_atual + "</p>";
}

btn.addEventListener("click", sortear);