// conditionals
// if, if else, if else if else, switch, ternary operator

// 1 - if
num = 1
if (num == 1){
    console.log("yeah the number is 1")
}

// 2 - if else
secret_num = 6
if (secret_num == 6){
    console.log("you got it right, the secret number is " + secret_num)
}
else{
    console.log("you got it wrong!!")
}

// if else if else
age = 22 
if (age<32){
    console.log("too young!")
}
else if (age>32){
    console.log("too old!!!!!!!!!!")
}
else{
    console.log("yeah correct age!!")
}


// 4 - switch
let weather = "rainy"
switch (weather){
    case "rainy":
        console.log("dont forget to bring the umbrella")
        break
    case "sunny":
        console.log("wear yo damn sunscreen dawg!")
        break
    case "snow":
        console.log("please wear at least 5 layers of clothes")
        break
    default:
        console.log("sleep all day, dont go out")
}

// 5 - ternary operators
let knowTheAnswer = true
knowTheAnswer
    ? console.log("raise hand and say u want to answer")
    : console.log("dont say easy and then mess it up")
    