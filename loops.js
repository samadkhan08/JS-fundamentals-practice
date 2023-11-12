// LOOPS

// Use for loop to iterate from 0 to 100 and print only even numbers.
for(let evenNum=0; evenNum<=100; evenNum++){
    if(evenNum%2===0)
    console.log(evenNum)
}


// Use for loop to iterate from 0 to 100 and print only odd numbers.
for(var oddNum=0; oddNum<=100; oddNum++){
    if(oddNum%2 !==0)
    console.log(oddNum)
}


// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
var sumOfallNum= 0;
for ( var i=0; i<=100; i++){
    sumOfallNum += i;
}
console.log(sumOfallNum)


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
var sumOfEvens = 0;
for (var i = 0; i <= 100; i += 2) {
    sumOfEvens += i;
} 
console.log("evens", sumOfEvens);
 
var sumOfOdds = 0;
for (var i = 1; i <= 100; i += 2) {
    sumOfOdds += i;
}
console.log("odds", sumOfOdds);


// Use for loop to iterate from 0 to 100 and print thesum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// OP : [2550,2500]
var sumOfEvens = 0;
var sumOfOdds = 0;

for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        
        sumOfEvens += i;
    } else {
        
        sumOfOdds += i;
    }
}
var sumArray = [sumOfEvens, sumOfOdds];
console.log(sumArray);


// Using the above countries array, create an array for countries length.
var countries= ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY","IRELAND", "JAPAN", "KENYA"]
var countriesLenght= [countries.length]
console.log(countriesLenght)


// Using the above countries array, find the country containing the biggest number of characters.
var maxLength = 0;
var longestCountry = "";

for (var i = 0; i < countries.length; i++) {
    if (countries[i].length > maxLength) {
        maxLength = countries[i].length;
        longestCountry = countries[i];
    }
}
console.log(longestCountry);



// Using the above countries array, find the country containing only 5 characters.
var countriesWith5Characters = [];

for (var i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesWith5Characters.push(countries[i]);
    }
}
console.log("Countries with 5 characters: " + countriesWith5Characters);



// Using the above countries array, reverse the order using loop without using a reverse method
var countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

var reversedCountries = [];

for (var i = countries.length - 1; i >= 0; i--) {
    reversedCountries.push(countries[i]);
}
console.log("Reversed countries array: " + reversedCountries);
