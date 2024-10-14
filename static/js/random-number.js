
let max = 100
let min = 1
let btn = document.querySelector("#guessBtn")
let random = generateRandomInteger(min, max)
let attempts = 1
let maxAttempts = 5

console.log(random)

function generateRandomInteger(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min) + min)
}
function handleClick(userfield){
    let number // defaults to null
    let userField = document.querySelector("#guess")
    let indovinato = true

    number = (userField.value).trim() 

    if(number === null || isNaN(number))  {
        console.log("Numero non valido")
        return
    }

    number = parseInt(number)

    if (attempts >= maxAttempts) {
        console.log("Tentativi esauriti")
        restart()
        return
    }

    console.log("Tentativo numero " + attempts)

    if(number < random){
        console.log("Troppo Piccolo!")
    }
  
    if(number > random){
        console.log("Troppo Grande!")
    }

    if(number === random){
        console.log("Hai vinto! Il numero era: " + random)
        console.log("Riavvo gioco...")
        restart()
        return
    }

    attempts++


}

function restart() {
            // generate another random number and display it subsequently
            random = generateRandomInteger()
            console.log("(" + random + ")")
}

btn.addEventListener("click", handleClick)
