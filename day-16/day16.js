// JSON
/*
- convert json to js object 
- convert js object to json
*/

// 1 - convert json to js object
// json object
const jsonData = '{ "name": "marvin", "age": 23}'
console.log(jsonData)
// converting to js object
const jsObj = JSON.parse(jsonData)
console.log(jsObj)

// 2 - convert js object to json
// js object
const objJS = {name: "divya", age: 22}
console.log(objJS)
// converting to json
const dataJSON = JSON.stringify(objJS)
console.log(dataJSON)