
function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
let max = 100
let min = 1
let randomNumber = generateRandomInteger(min, max)
let indovinato = false


alert("Indovina il numero tra "+ min + " e " + max)

for(i = 1; i < 6;  i++){
    alert("Tentativo n°" + i)
    
        let number = prompt("Inserisci un numero compreso tra " + min + " e " + max)
        number = parseInt(number)
        while (number < 1 || number > 100){
            let number = prompt("Numero sbagliato. Inserisci un numero compreso tra " + min + " e " + max)
            number = parseInt(number)
        }
    while (number === isNaN){
        let number = prompt("Inserisci un numero compreso tra " + min + " e " + max)
        number = parseInt(number)
        while (number < 1 || number > 100){
            let number = prompt("Numero sbagliato. Inserisci un numero compreso tra " + min + " e " + max)
            number = parseInt(number)
        }
    }
    if (number > randomNumber) {
        alert("Il numero inserito " + number + " è più grande")
    } else if (number < randomNumber){
        alert("Il numero inserito " + number + " è più piccolo")
    } else {
        alert("HAI INDOVINATO!!!!!!! al tentativo n°" + i , ". Il numero era: " + randomNumber)
        indovinato = true
    }
}
alert("Tentativi terminati")
if (indovinato === false) {
    console.log("Sarai fotuntao un altra volta, il numero era: " + randomNumber)
}