// day 12 
// regular expressions

// 1 - creating a pattern with regexp constructor
// 1.1 - without flags
let pattern_1 = 'love'
let regex_1 = new RegExp(pattern_1)

// 1.2 - with flags
let pattern_2 = 'broken'
let flag = 'gi'
let regex_2 = new RegExp(pattern_2, flag)


// 2 - creating a pattern without regexp constructor
let regex_4 = /love/gi


// 3 - regexp object methods
// 3.1 - testing for a match
const lovePhrase = 'i love you'
const pattern_3 = /love/
const result = pattern_3.test(lovePhrase)
console.log(result)

// 3.2 array containing all matches
const hatePhrase = 'i hate you'
const pattern44 = /hate/
const matchResult = hatePhrase.match(pattern44)
console.log(matchResult)

// 3.3 replacing a substring
const randomPhrase = 'elvis has left the building'
const patternSearch = /elvis/
matchReplaced = randomPhrase.replace(patternSearch, 'marvin')
console.log(matchReplaced)


// 4 - square bracket
const pattern_one = /[Aa]pple/
const txt = 'Apples and grapes are the best fruits to ever exist. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.'
const matches = txt.match(pattern_one)
console.log(matches)

const pattern_two = /[Aa]pple/g
const match_one = txt.match(pattern_two)
console.log(match_one)
