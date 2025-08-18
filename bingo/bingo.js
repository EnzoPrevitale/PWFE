let sorteados = [];
let num_atual;
let btn = document.getElementById("sortear");
let lista = document.getElementById("lista");
listaHTML = ""
letras = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75]
}

function random(n) {
    return Math.floor(Math.random() * n) + 1;
}

function sortear() {
    do {
        num_atual = random(75);
    } while(sorteados.includes(num_atual))
    
    sorteados.push(num_atual);
    sorteados.sort();
    for(let i in letras) {
        if(letras[i][0] <= num_atual <= letras[i][1]) {
            console.log(letras[i]);
        } 
    }
    lista.innerHTML += "<li>" + num_atual + "</li>";
}



btn.addEventListener("click", sortear);