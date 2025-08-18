let btn = document.querySelector("button");
let txt = document.querySelector("h1");
let par = document.querySelector("p");

let random = function(num){
    return Math.floor(Math.random() * num + 1);
}

function changeColor() {
    let cor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    let corBtn = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    let corTexto = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    let corP = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = cor;
    btn.style.backgroundColor = corBtn;
    txt.style.color = corTexto;
    par.style.color = corP;
    par.style.fontSize = random(20) + "px";
}

setInterval(changeColor, 1);