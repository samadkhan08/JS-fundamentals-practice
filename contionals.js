// CONDITIONALS 


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways using if else ,ternary operator.
var a = 10
var b = 8
if (a > b){
    Print = "a is greater than b"
} else {
    Print = "a is less then b"
}
console.log(Print)

var A = 15;
var B = 20;
var ABstatement = A > B ? 'A is greater then B' : 'A is less then B' 
console.log(ABstatement)


// Check, if a number is even or not Enter a number: 2
// 2 is an even number
// Enter a number: 9
// 9 is is an odd number
var num = 2;
if (num%2===0){
    console.log("It is an even number")
}
else{
    console.log("It is an odd number")
}

var num = 9;
if (num%2===0){
    console.log("It is an even number")
}
else{
    console.log("It is an odd number")
};


// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback: 'You are old enough to drive' but if not 18 give another feedback stating to wait for the ‘number’ of years he needs to turn 18. 
// Enter your age: 30 
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.
var person = 10
if (person>=18){
   console.log("You are old enough to drive") 
}
else{
    var yearsTowait = 18 - person
    console.log(yearsTowait)
}



// Find the largest of three numbers. (2,4,7) O/P : 7
const num1 = 2
const num2 = 4
const num3 = 7
if(num1>=num2 && num1>=num3){
    console.log(num1)
} else if (num2>=num1 && num2>=num3){
    console.log(num2)
} else {
    console.log(num3)
}


// Check if the day is working day or weekend day. Using switch case
// input: Monday
// O/P : Working Day
const day = "monday"
switch (day){
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("week days")
        break
    case "saturday":
    case "sunday":
        console.log("weekend day")
        break
    default:
    console.log("not found")
    break
}


// You are creating a role-based access control system. Write a function that checks if a user has permission to perform a certain action. Users can  have roles of "admin", "user", or "guest" The actions include "create", "read", "update" and "delete". Define the permissions in an object and use conditional statements to check if a user can perform the requested action. Input : checkPermission(userRole, action) Output: "Permission granted."
function checkPermission(userRole, action){
     const admin= { create: true, read: true, update: true, delete: true};
     const user= { create: true, read: true, update: true, delete: false};
     const guest= { create: false, read: true, update: false, delete: false}

     if (userRole==="admin" && admin[action]){
        console.log("permission granted")
     }
     else if(userRole==="user" && user[action]){
        console.log("permission granted")
     } 
     else if( userRole==="guest" &&  guest[action]){
        console.log("permission granted")
     } 
     else {
        console.log("permission denied")
     }
 }

const userRole= "guest"
const action= "read"
const result= checkPermission(userRole, action)
console.log(result)



// You are building a simple discount calculator. Write a function that calculates the final price of a product after applying a discount. If the product price is greater than or equal to $50, apply a 10% discount; otherwise, no discount is applied.
// Input : calculateDiscountedPrice(60)
// Output: ""Final price: $54"."
var productPrice= 60
function discountcalc(productPrice){
    if(productPrice>=50){
       console.log(productPrice - (0.1 * productPrice))
    } else{
        console.log("no discount is applied")
    }
}
discountcalc(productPrice);