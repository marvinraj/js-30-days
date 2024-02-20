// 1 - higher order function
// 2 - functional programming



// 1 -- higher order function
function higherOrderFunction(func){ // HOF
    console.log("i am higher order function")
    func()
}
function callBackFunction(){ // callback function
    console.log("i am a callback function")
}
higherOrderFunction(callBackFunction)
// in the code above, higherOrderFunction() is HOF because we are passing a callback function as a parameter to it.

// 1.1 -- how hof work?
// --- write a function that calculates area and diameter of a circle
// -- answer 1
radii = [1,2,3]
const calcArea = function(radius){
    const output = []
    for(let i = 0; i<radius.length; i++){
        output.push(Math.PI*radius[i]*radius[i])
    }
    return output
}
const calcDiameter = function(radius){
    const output = []
    for(let i = 0; i<radius.length; i++){
        output.push(radius[i]*2)
    }
    return output
}
console.log(calcArea(radii))
console.log(calcDiameter(radii))

// -- answer 2 (with higher order function)
const areaCircle = function(radius){
    return Math.PI*radius*radius
}
const diameterCircle = function(radius){
    return radius*2
}
const calculate = function(radius, logic){
    const output = []
    for(let i = 0; i<radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}
console.log(calculate(radii, areaCircle))
console.log(calculate(radii, diameterCircle))


// 2 -- functional programming
// 2.1 - map()
// example 1 -- add 10 to every element in an array
const arr = [1,2,3,4,5]
const output = arr.map((num) => num+=10)
console.log(output)
// example 2 -- extract first name from array
const users = [ // array of objects with properties
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]
const result = users.map((user) => user.firstName)
console.log(result)

// 2.2 - filter()
// example 1 - remove odd numbers only into new array
const rand_arr = [1,2,3,4,5]
const new_rand_arr = rand_arr.filter((nums) => nums % 2)
console.log(new_rand_arr)

// example 2 - remove users age greater than 30
const test = users.filter((age) => age.age>30)
console.log(test)

// 2.3 - reduce()
// example 1 - find sum of all values in array
const numbers =  [1,2,3,4,5]
const sum = numbers.reduce((acc, curr) => acc+curr, 0)
console.log(sum)