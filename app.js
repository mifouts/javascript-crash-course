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


function sumOfTwoNumbers (num1, num2) {
    return num1 + num2
}

    console.log(sumOfTwoNumbers (10, 10));


//function convertCelsiusToFahrenheit (celsius) {
  //  let fahrenheit = celsius * 1.8 + 32
    //return fahrenheit
//}

const convertCelsiusToFahrenheit = (celsius) => {
    return celsius * 1.8 + 32
}
console.log(convertCelsiusToFahrenheit(0))


// ARRAYS 


//let arr = [20, 30, 40, 50, 100]

// first element of array
//console.log(arr[0])

// last element of array
//console.log(arr[arr.length - 1])

// add element onto end of array
//arr.push(200)

// [20, 30, 40, 50, 100]
//let newARR = arr.filter(element => element < 50)

//console.log(newARR)

//console.log(arr)

//let grades = ['A+', 'A', 'FAIL']

//let goodGrades = []

//for (let i = 0; i < grades.length; ++i){
    //if (grades[i] !== 'FAIL'){
      //  goodGrades.push(grades[i])
    //}
  //  console.log(grades[i]);

//}

//console.log(goodGrades)

let dollars = [1, 5, 10, 3]

let cents = [];

for (let i = 0; i < dollars.length; ++i){
    cents.push(dollars[i] * 100)
} 

console.log(cents)


//let newARR = dollars.map((element) => {
 //   console.log(element)
  //  return element * 100
//})

//let cents = dollars.map(element => element * 100)
//console.log(cents)


// OBJECTS 


let users = [{
    username: 'Mitch',
    email: 'mitch@frontendsimplified.com',
    password: 'test123',
    subscriptionStatus: 'VIP',
    discordId: 'Mitch Fouts#0001',
    lessonsCompleted: [0, 1]
}, {
    username: 'Mitri',
    email: 'mitri@frontendsimplified.com',
    password: 'test1234',
    subscriptionStatus: 'VIP',
    discordId: 'Mitri#0001',
    lessonsCompleted: [0, 1, 2, 3]
}, {
    username: 'Zen',
    email: 'zen@frontendsimplified.com',
    password: 'test12345',
    subscriptionStatus: 'VIP',
    discordId: 'Mitri#0001',
    lessonsCompleted: [0, 1, 2, 3]
}];

//function login(email, password){
    //for (let i = 0; i < users.length; ++i){

    //if (users[i].email === email){
      //  console.log([i]);
        //if (users[i].password === password){
          //  console.log('log the user in - the details are correct')
        //}
        //else {
          //  console.log('password is incorrect - try again')
        //}
        //return;
    //}
    //}
    //console.log('could not find an email that matches')
//}

//login('mit@frontendsimplified.com', 'wrongpassword');


function register(user){
    users.push(user);
}

register({
    username: 'zen', 
    email: 'mitch@frontendsimplified.com', 
    password: 'mitch123', 
    subscriptionStatus: 'VIP', 
    discordId: 'Mitch#001', 
    lessonsCompleted: [0, 1]})

console.log(users)


// document object model


// first way
//console.log(document.querySelector('#title'))


// second way
//console.log(document.getElementById('title'))


// change html
document.querySelector('#title').innerHTML += 'Frontend Simplified'

// change css
document.querySelector('#title').fontSize = '16px'



//function changeTitleToRed() {
    //document.querySelector('#title').style.color = 'red'
   // console.log('clicked')
//}

function toggleDarkMode(){
    document.querySelector('body').classList.toggle("dark-theme");
}




