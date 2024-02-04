// loops

// 1 - for loop
for (let i=0; i<5; i++){
    console.log(i)
}


let nums = [1,2,3,4,5]
let sum = 0
for (let i=0; i<nums.length; i++){
    sum = sum + nums[i]
    console.log(i)
}
console.log(sum)

// 2 - while loop
let x = 0
while (x<5){
    console.log(x)
    x++
}

// 3 - do while loop
let y = 0
do{
    console.log(y)
    y++
} while (y<5)

// 4 - for of loop (for array)
const fruits = ["apples", "oranges", "grapes", "papayas"]
for (const fruit of fruits){
    console.log(fruit)
}

// 5 - break (used to interrupt a loop)
console.log("BREAK !!")
for (let i=0; i<5; i++){
    if(i==3){
        break
    }
    console.log(i)
}

// 6 - continue (skip iterations)
console.log("CONTINUE !!")
for (let i=0; i<5; i++){
    if(i==3){
        continue
    }
    console.log(i)
}