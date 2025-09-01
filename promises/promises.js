let time = prompt("Digite o nome do seu time.")

esperar = (ms) => new Promise((resolve, reject) => {
    if (time == "Corinthians") {
    setTimeout(() => resolve(ms + "ms se passaram."), ms);
    } else {
    reject("Vai tomar no cu")
    }
});

esperar(1910)
    .then(alert)
    .catch(alert)
    .finally(alert("aaaaaaaaaaaaaaaaaaaaaaa")); 
