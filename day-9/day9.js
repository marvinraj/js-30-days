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

// -- answer 2
const areaCircle = function(radius){
    return Math.PI*radius*radius
}
const diameterCicle = function(radius){
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