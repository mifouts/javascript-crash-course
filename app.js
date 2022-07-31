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


let groceryCash = 50
let groceryPrice = 40
let isStoreOpen = true

if (groceryCash >= groceryPrice && isStoreOpen === true) {
    console.log('print the receipt')
}


let hot = true 

hot ? console.log('weather is hot outside') : console.log('weather is cold')

let subscribedd = true
let loggedInn = true

//let str = subscribedd && loggedInn ? 'show the video' : 'hide the video'
//console.log(str);

let cashh = 45
let pricee = 40
let isStoreOpenn = true


isStoreOpenn && cashh >= pricee ? console.log('give receipt') : console.log('do not give receipt')

isStoreOpenn && cashh <= pricee ? console.log('do not give receipt') : console.log('give receipt')


// DRY = dont repeat yourself
//let count = 1;


//while (count <= 100) {
  //  console.log(count)
    //count = count + 1
//}

//for (let i = 0; i < 3; i++) {
  //  console.log(i)
//}


// Interview Question!! printing things to console with certain perameters
for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Frontend Simplified`)
       }

   else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`)
   }

   else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`)
   }

   else {
    console.log(`${i} -> ${i}`)
   }
}


// Print every character in a string 

let str = 'Frontend Simplified'
for (i = 0; i < str.length; i++) {
    console.log(str[i])
}


// FUNCTIONS

// function definition
function welcomePersonToFES (name) {
    console.log(`Welcome to Frontend Simplified, ${name}`)
    
}

// call function
welcomePersonToFES('Mitch');
welcomePersonToFES('Zen');
welcomePersonToFES('Mitri');