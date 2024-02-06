// functions

/* 
ways to create function
1. declaration function
2. expression function
3. anonymous function
4. arrow function
 */

// 1 - declaration function
function square(){ // calc square of a number
    let num_1 = 4
    let sq = num_1*num_1
    console.log(sq)
}
square()

function areaOfCircle(r){ // calc area of a circle given radius
    let area = 3.142*r*r
    return area
}
console.log(areaOfCircle(2))

function calcSumArray(arr){ // calc sum of an array
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum = sum+arr[i]
    }
    console.log(sum)
}
rand_array = [1,2,3,4,5]
calcSumArray(rand_array)

function sumAllNum(){
    let sum = 0
    for (let i=0; i<arguments.length;i++){
        sum = sum+arguments[i]
    }
    console.log(sum)
}
sumAllNum(1,2,3,4,5,6,1,23,3)
sumAllNum(3,4,1,2,3,44,42,12,322)

// 2 - annonymous & expression function
const sq = function(n){
    return n*n
}
console.log(sq(2))


// 3 - self invoking function
let squaredNum = (function(n) {
    return n * n
  })(10)
  
  console.log(squaredNum)

// 4 - arrow function

