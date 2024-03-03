// day 11 
// destructuring arrays & objects
// spread operator

// 1 - destructuring array
const evenNums = [2,4,6,8]
let [first, second, third, fourth] = evenNums
console.log(evenNums)
console.log(first, second, third, fourth)


// 2 - destructuring object
const sizes = {
    width: 10,
    height: 20,
    length: 30
}
let {width, height, length, area, volume=1000} = sizes // default value given to volume as the key does not exist in the object
console.log(sizes)
console.log(width, height, length, area, volume)

// 2.1 - renaming during structuring
let {width:w, height:h, length:l, area:a} = sizes
console.log(w, h, l, a)


// 3 - spread operator
// 3.1 - get rest of array
const countries = ["france", "germany", "italy", "spain", "philippines"]
let [french, german, italian, ...rest] = countries
console.log(french, german, italian)
console.log(rest)

// 3.2 copy array 
const rand_nums = [2,4,6,8,10]
const [...even] = rand_nums
console.log(rand_nums)
console.log(even)

// 3.3 copy object
const sunwayStudent = {
    name: "marv",
    age: 22,
    university: "sunway"
}
const copySunwayStudent = {...sunwayStudent}
console.log(sunwayStudent)
console.log(copySunwayStudent)

// 3.4 arraw function
const sumAllNums = (...args) =>{
    let sum = 0
    for(const num of args){
        sum += num
    }
    return sum
}
console.log(sumAllNums(1,2,3,4,5))