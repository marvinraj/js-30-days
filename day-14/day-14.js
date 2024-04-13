// day 14
// error handling


// js try-catch-finally block

/*
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}
*/

// example using try-catch-finally block
try {
    let lastName = "raj"
    let fullName = firstName + lastName
} catch(err) {
    console.error(err)
} finally {
    console.log("this will be executed in any case")
}


// error types -- refer link below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors