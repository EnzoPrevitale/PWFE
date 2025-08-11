let btn = document.querySelector("button");

let random = function(num){
    return Math.floor(Math.random() * num + 1);
}

for(let i = 0; i < 100; i++) {
    let cor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = cor;
}