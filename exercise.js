
// Change all the string characters to capital letters
var str="asdc charminar"
console.log(str.toUpperCase())

// Change all the string characters to lowercase letters
var str1="ASDC"
console.log(str1.toLowerCase())

// Cut (slice) out the first word of the string (Hello World)    
var str="HelloWorld"
console.log(str.substr(1, 9))
 console.log(str.slice(1, 10))


// split the string at the comma and change it to an array.
var spleet="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(spleet.split(","))


// Determine the position of the first occurrence of a in Javascript
var str2="Javascript"
console.log(str2.startsWith("a"))
console.log(str2.indexOf("a"))
// Determine the position of the last occurrence of a in Javascript
console.log(str2.lastIndexOf("a"));


// Merge 'Javascript is used' and 'to add functionalities to the web app' to a single string, 'Javascript is use to add functionalities to the web app'
var str3= "'Javascript is used "
var str4="to add functionalities to the web app"
console.log(str3+str4)


// This course is all about Javascript. Check if Javascript is in the sentence
var str5="This course is all about Javascript"
console.log(str5.includes("Javascript"))



// Generate a random number between 0 and 100 inclusively.
// var num1= 0
// var num2= 100
console.log (Math.round(Math.random() * (100 - 0)))

// Generate a random number between 50 and 100 inclusively
console.log (Math.round(Math.random() * (100 - 50)))



// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log("1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125")



// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 50000 from salary per month, 10000 annual bonus.
var salary=50000
var bonus= 10000
console.log("totalincome=" , salary*12+bonus )





