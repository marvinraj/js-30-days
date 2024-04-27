// DAY 21 - Document Object Model (DOM) - https://30dayjavascript.js.org/21-day/

/*
- getting elements
    -- by tag name
    -- by class name
    -- by id
    -- by querySelector methods
- adding attribute
    -- using setAttribute
    -- without setAttribute
    -- using classList
    -- using remove
- adding text to html element
- adding style
*/


// 1 - getting elements
// 1.1 - by tag name
let allTitle = document.getElementsByTagName('h1')
console.log(allTitle)
for (let i=0; i<allTitle.length; i++){
    console.log(allTitle[i])
}

// 1.2 - by class name
let allTitle2 = document.getElementsByClassName("title")
console.log(allTitle2)
for (let i=0; i<allTitle2.length; i++){
    console.log(allTitle2[i])
}

// 1.3 - by id
let firstTitle = document.getElementById("first-title")
console.log(firstTitle)

// 1.4 by querySelector - can be used to select tag, class and id
let firstTitle2 = document.querySelector("h1")
let firstTitle3 = document.querySelector(".title")
let firstTitle4 = document.querySelector("#first-title")
console.log(firstTitle2)
console.log(firstTitle3)
console.log(firstTitle4)

let allTitle3 = document.querySelectorAll("h1")
for (let i=0; i<allTitle3.length; i++){
    console.log(allTitle3[i])
}



// 2 - add attribute
// do later

// 3 - adding text - read more about this here https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/


// 4 - adding style - easy so i skip
