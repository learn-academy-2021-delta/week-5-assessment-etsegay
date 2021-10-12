// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k" 
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c" 

describe("convertToCode", ()=>{
    test("a string,its characters a,e,i,o coded to 4,3,1,0 respectively", ()=>{
        expect(convertToCode("Lackadaisical")).toEqual("L4ck4d41s1c4l")
    })
    test("a string,its characters a,e,i,o coded to 4,3,1,0 respectively", ()=>{
        expect(convertToCode("Gobbledygook")).toEqual("G0bbl3dyg00k")
    })
    test("a string,its characters a,e,i,o coded to 4,3,1,0 respectively", ()=>{
        expect(convertToCode("Eccentric")).toEqual("3cc3ntr1c" )
    })
})

// b) Create the function that makes the test pass.
/*
   Algorithm ->return coded message
        Input->string that contain vowels a and 
        output->a string,its characters "a,e,i,o" coded to 4,3,1,0 respectively
            create a function
            convert string to lowercase and split it to form array and store in variable
            iterate the array using for loop
            if conditions
            join the array to turn it string
*/


let convertToCode=(string)=>{
  let str= string.toLowerCase().split("")
  for(let i=0;i<str.length;i++){
      if(str[i]==="a"){
          str[i]=4
      }else if(str[i]==="e"){
          str[i]=3
      }else if(str[i]==="i"){
          str[i]=1
      }else if(str[i]==="o"){
          str[i]=0
      }else{
          str[i]=str[i]
      }
  }return str.join("")
}
//console.log(convertToCode("Eccentric"))



// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("containVowel", ()=>{
    test("returns an  array of words that contain a specific letter", ()=>{
        expect(containVowel(["Apple", "Banana", "Plum", "Orange", "Kiwi"],"a")).toEqual(["Apple", "Banana", "Orange"])
    })
    test("returns an  array of words that contain a specific letter", ()=>{
        expect(containVowel(["Mango", "Cherry", "Apricot", "Blueberry", "Peach"],"e")).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})


// b) Create the function that makes the test pass.

/*
    Algorithm->return an array that contain a specific letter
        Input->an array of words
        Output->an  array of words that contain a specific letter
            create a function
            declare an empty array
            iterate the given array using for loop
            convert array[i] to lowercase and use if condition
            push array[i]that contain the specific letter to the empty array
            return the created new array
*/

let containVowel=(array,vowel)=>{
    let newArray=[]
    for(let i=0;i<array.length;i++){
        if(array[i].toLowerCase().includes(vowel)){
            newArray.push(array[i])
        }
    }return newArray
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("isFullHouse", ()=>{
    test("checks if the array is fullhouse array or not", ()=>{
        expect(isFullHouse([5, 5, 5, 3, 3])).toEqual(true)
    })
    test("checks if the array is is fullhouse array or not", ()=>{
        expect(isFullHouse([5, 5, 3, 3, 4])).toEqual(false)
    })
    test("checks if the array is is fullhouse array or not", ()=>{
        expect(isFullHouse([5, 5, 5, 5, 4])).toEqual(false)
    })
})


// b) Create the function that makes the test pass.

/*
Algorithm-> chech if a given array is a fullHouse array
Input->an array of five numbers
Output=>boolean value that confirms if the array is fullHouse array or not.
    create a function
    declare an embpty array
    declare an empty object
    loop the array using for..of..loop
    loop the counts object
    push counts[key] to an empty array
    loop over the new array
    if conditionals
    return
*/
function isFullHouse(array){
    let newArr=[]
const counts = {};
for (const element of array) {
  counts[element] = counts[element] ? counts[element] + 1 : 1;
}
for(const key in counts){
    newArr.push(counts[key])
}

for(let i=0;i<newArr.length;i++){
  if(newArr[i]===3)return true
  
}return false
}
//   console.log(isFullHouse(hand1))
//   console.log(isFullHouse(hand2))
//   console.log(isFullHouse(hand3))
