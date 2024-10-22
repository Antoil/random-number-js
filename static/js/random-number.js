
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
    let elem = document.querySelector("#message")
    let elemento = document.querySelector("#messageTwo")

    number = (userField.value).trim() 

    if(number === null || isNaN(number))  {
        console.log("Numero non valido")
        return
    }

    number = parseInt(number)

    if (attempts >= maxAttempts) {
        elem.innerHTML = `Tentativi esauriti ${random}!`
        restart()
        return
    }

    //elemento.innerHTML = `Tentativi numero <strong>${attempts}</strong>!!`

    if(number < random){
        elemento.innerHTML = `Troppo basso, prova un numero più alto di <strong>${number}</strong>!`
        elem.innerHTML = `Tentativi numero <strong>${attempts}</strong>!`

    }
  
    if(number > random){
        elemento.innerHTML = `Troppo alto, prova un numero più basso di <strong>${number}</strong>!`
        elem.innerHTML = `Tentativi numero <strong>${attempts}</strong>!`

    }

    if(number === random){
        elem.innerHTML = `Hai vinto! Il numero è <strong>${random}</strong>!`
        restart()
        return
    }

    attempts++

    

}

function restart() {
            // generate another random number and display it subsequently
            attempts = 1
            random = generateRandomInteger()
            elemento.innerHTML = `Riavvio gioco...`
}

btn.addEventListener("click", handleClick)
