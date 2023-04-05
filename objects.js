//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
let vals = Object.values(person3);
let keys = Object.keys(person3);
    console.log(`My favorite foods are: pizza: ${vals[0][0]} and ${vals[0][1]}, tacos: "${vals[1]}", burgers: ${vals[2]}, ice cream: ${vals[3]}, and ${keys[4]} from their specific establishments: Oberwise: ${vals[4][0].oberwise},
    Dunkin: ${vals[4][0].dunkin}, Culvers: ${vals[4][0].culvers}, McDonalds: ${vals[4][0].mcDonalds}, and Cupids Candies: ${vals[4][0].cupids_candies}.`)




// console.log(`My favorite pizza is ${person3.pizza[0]} and ${person3.pizza[1]}. I have been known to say that my favorite tacos are "${person3.tacos}."
// Although most of my friends think it's gross, my favorite burgers are ${person3.burgers}. I have a huge sweet tooth and love
// all kinds of ice cream including ${person3.ice_cream[0]},${person3.ice_cream[1]}, and ${person3.ice_cream[2]}. I will only drink certain flavors of milkshakes at certain establishments.
//  `)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function ArrowPerson(name, age) {
    this.name = name;
    this.age  = age;

//increments by 1 each time
    this.agedUp=() => {
    this.age++;
};

this.printInfo = () => {
    console.log(`${this.name} is ${this.age}.`)
};
}
let otherName = new ArrowPerson('Mike', '32')
otherName.printInfo();
otherName.agedUp()
otherName.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let checkLength = (string) => {
    return new Promise ((resolve, reject) =>{
        if (string<=10){
            resolve(string);
            console.log("Small Number")
        }
        else {
            reject(string);
            console.log("Big word")
        }
    })
}



//Code Wars 1
// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

function periodIsLate(last, today, cycle){
    return(today-last/86400000>cycle)
}

//Code Wars 2
//Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParenth(parens){
    let parEn = [];
    let parenObj = {'(': ')'}
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            (parens[i]);
        }
        else {
            let last = parEn.pop(); 
            if (parens[i] !== parenObj[last]) {
              return false
            }
        }
    }
    if (parEn.length !== 0) {
      return false
    }
    return true;
}