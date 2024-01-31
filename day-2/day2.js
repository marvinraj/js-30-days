// data types

// 1 - number
age = 23
weight = 59

// 2 - string
let first_name = "adam"
let last_name = "apple"
let language = "english"
console.log(first_name + last_name + language)
let person_info = `my name is ${first_name} ${last_name} and i speak ${language}`
console.log(person_info)
// string methods
// refer to the site

// 3 - check data types
console.log(typeof first_name)
console.log(typeof age)

// 4 - casting (changing data type)
// can use - parseInt(), parseFloat(), Number(), +sign, str()
// 4.1 - string to int
let num = '10'
let numToInt_1 = parseInt(num)
let numToInt_2 = Number(num)
let numToInt_3 = +num
console.log(numToInt_1)
console.log(numToInt_2)
console.log(numToInt_3)
// 4.2 - string to float
let pie = '3.142'
let pieFloat_1 = parseFloat(pie)
let pieFloat_2 = Number(pie)
let pieFloat_3 = +pie
// 4.3 - float to int
let gravity = 8.91
let gravityToInt = parseInt(gravity)
console.log(gravityToInt)

