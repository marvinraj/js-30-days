// DAY 10 - SETS & MAPS

// 1 - sets
// 1.1 - create empty set
const companies = new Set()
console.log(companies)

// 1.2 - creating set from array 
const languages = ["english", "tamil", "hindi", "mandarin"]
const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

for (const language of setOfLanguages){
    console.log(language)
}

// 1.3 - add item into a set
companies.add("google")
console.log(companies)

// 1.4 - delete item from a set
companies.delete("google")
console.log(companies)

// 2 - maps
// 2.1 - create empty map
const countries = new Map()
console.log(countries)

// 2.2 create map from array
const cars = [["porsche", "911 gt3 rs"], ["ferrari", "f40"], ["lamborgini", "aventador"]]
const mapOfCars = new Map(cars)
console.log(mapOfCars)

// 2.3 add values to map
mapOfCars.set("perodua", "myvi")
console.log(mapOfCars)