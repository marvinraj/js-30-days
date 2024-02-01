// array!!!

// creating array
let arr_1 = Array()
let arr_2 = []

// accessing array
let cars = ["porsche", "audi", "ferrari", "lambo"]
console.log(cars)
console.log(cars[1])

// modify array
cars[0] = "porsche 911 turbo s"
console.log(cars)

// methods to manipulate array
let basket_1 = ["apple", "orange"]
let basket_2 = ["carrot", "spinach"]
let basket_3 = basket_1.concat(basket_2)
console.log(basket_3)

// convert to string
console.log(basket_3.toString())

// slicing an array
let rand_num = [1,2,3,4,5]
console.log(rand_num.slice(0,2))

// add item into array
let ages = [11,12,24,54,23,66]
ages.push(99)
console.log(ages)

// remove end item
ages.pop(99)
console.log(ages)

// remove start item
ages.shift()
console.log(ages)

// reverse
ages.reverse()
console.log(ages)

// sort
ages.sort()
console.log(ages)

// array of array
front_end = ["html", "css", "js"]
back_end = ["mongodb","nodejs"]
full_stack = [front_end, back_end]
console.log(full_stack)
console.log(full_stack[0])
console.log(full_stack[0][1])