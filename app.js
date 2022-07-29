let fullName = 'Mitch Fouts'

let isRaining = true
let temperature = 20
let planet = 'Earth'

temperature = temperature + 2

console.log(temperature)



let celsius = 10 

fahrenheit = celsius * 1.8 + 32

console.log(fahrenheit)


let bool = '1' == 1

console.log(bool)


let subscribed = false
let loggedIn = true

if (subscribed === true) {
    console.log ('show the video')
}

else if (loggedIn === true) {
    console.log('tell user to upgrade subscription')
}

else {
    console.log('tell user to log into account')
}


let cash = 100
let price = 50
let difference = cash - price

if (cash>price) {
    console.log(`you paid extra - here's ${difference} dollars change`)
}

else if (cash===price) {
    console.log("you paid the exact amount, have a nice day!")
}

else {
    console.log(`not enough money - you still owe ${difference * -1} dollars`)
}