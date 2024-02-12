// scope

// variables scope -- global or local

// 1 - global scope
let a = "apple"
let b = "balls"
function changeValue(){
    console.log(a,b) // can acccess a and b because both are global variables
}
changeValue()
console.log(a,b)


// 2 - local scope
function learnLocal(){
    let dogName = "lucky"
    if (true){
        let name = "marvin"
        let age = 23
        let weight = 99
        console.log(name, age, weight)
    }
    // console.log(name, age, weight) 
    // -- line above will not print anything because the variables are all in the if block
    console.log(dogName)
}

// local scope (var vs let & const)
// 1 -- var
function gravityValue(){
    var gravVal1 = 9.81
    console.log(gravVal1)
}
// console.log(gravVal) --> error

if (true) {
    var gravVal2 = 9.82
    console.log(gravVal2)
}
console.log(gravVal2)

// 2 -- const & let
function gravityValue2(){
    const gVal = 9.999
    console.log(gVal)
}
gravityValue2()
// console.log(gVal) -- error

if (true){
    const gVal2 = 10.22
    console.log(gVal2)
}
// console.log(gVal2) -- error



// 3 - object
const person = {
    firstName: "marvin",
    lastName: "raj",
    age: 43,
    country: "malaysia"
}
console.log(person)

console.log(person.firstName)
console.log(person["firstName"])

const human = {
    first_name: "pickle",
    last_name: "divs",
    age: 333,
    getFullName: function() {
        return `${this.first_name} ${this.last_name}`
    }
}
console.log(human.getFullName())