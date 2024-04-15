// day 15 - classes

/*
- define class
- instantiate class
- constructor
- default values with constructor
- getter
- setter
- static method
- inheritance
- overriding methods
*/

// 1 - defining class
class Person{
    // pass
}

// 2 - intantiate class
class Animal{
    // pass
}
const animal1 = new Animal()
console.log(animal1)

// 3&4 - constructor & default values
class Human{
    constructor(firstName="lionel", lastName="messi"){ // default values
        this.firstName = firstName
        this.lastName = lastName
    } 
}
const human1 = new Human('divya', 'sashendran') // Human object one
const human2 = new Human('marvin', 'raj') // Human object two
const human3 = new Human() // Human object three, takes the default values
console.log(human1)
console.log(human2)
console.log(human3)

// 4 - setter, getter, regular methods, static methods
class Player{
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country 
        this.city = city
        this.score = 0
        this.skills = []
    }

    // getters
    get getScore(){
        return this.score
    }
    get getSkills() {
        return this.skills
    }

    // setters
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }

    // regular method
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''
    
        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }

    // static methods - 
    // not called on instances of the class, instead, they are called on the class itself
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
          hours = '0' + hours
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

// create Player object
const player1 = new Player("marvin", "raj", 34, "malaysia", "kl")
const player2 = new Player("divya", "sashendran", 33, "spain", "madrid")
// use setters to set values
player1.setScore = 2
player1.setSkill = "html"
player1.setSkill = "python"
player2.setScore = 5
player2.setSkill = "css"
player2.setSkill = "python"
// use getters to get values
console.log(player1.getScore)
console.log(player1.getSkills)
console.log(player2.getScore)
console.log(player2.getSkills)
// use regular method
console.log(player1.getPersonInfo())
console.log(player2.getPersonInfo())
// calling the static methods directly from the class Player
console.log(Player.favoriteSkill())
console.log(Player.showDateTime())

// 5 - inheritance, overriding methods
class Student extends Player{
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city) // provide access to all properties of parent class
        this.gender = gender // new gender property added to child class
    }

    saySomething() {
        return "hello, welcome back to school!"
    }

    // method in child is the same as the parent, hence parent method will be overridden
    getPersonInfo() { 
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
    
        let formattedSkills = skills ? `He knows ${skills}` : ''
        let pronoun = this.gender == 'Male' ? 'He' : 'She'
    
        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const student1 = new Student("cristiano", "ronaldo", 44, "portugal", "madeira", "male")
student1.setScore = 1
student1.setSkill = "python"
student1.setSkill = "html"

console.log(student1)
console.log(student1.saySomething())
console.log(student1.getFullName())
console.log(student1.getPersonInfo())

