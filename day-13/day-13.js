// day 13
// - console object methods

// console.log - show output on the browser console
// document.write to show output on the browser document
// document.getElementById - interact with DOM

// 1 - console.log()
console.log("I will finish this 30 day challenge!")

// 2 - console.warn()
console.warn('this is a warning!')

// 3 - console.error()
console.error('this is an error message!!')

// 4 - console.table() - takes one required argument, either array or object
// 4.1 - array
const names = ["marv", "divya", "lucky"]
console.table(names)

// 4.2 - object
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
console.table(user)

// 5 - console.info()
console.info('this is an info message?')

// 6 - console.assert() - writes an error message if the assertion is false. if true, nothing happens.
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

// 7 - console.clear() - clears the console.
console.clear()