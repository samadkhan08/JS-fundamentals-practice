// ARRAY


// Declare an empty array;
const Emptyarray= []
console.log(Emptyarray)



// Declare an array with more than 5 number of elements
const elem= ['object', 'array', 'conditionals', 'functions', 'elements', 'strings']
console.log(elem)



// Find the length of your array
console.log(elem.length)



// Get the first item, the middle item and the last item of the array 
console.log(elem[0], elem[2], elem[5])



// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes=[
    {Name:'Mohammed',
     rollNo: 1,
     class: 1,
},
    {Name:'Henry',
     rollNo: 2,
     class: 7,
},
    {Name:'Ryan',
     rollNo: 3,
     class: 6,
},
    {Name:'Aarush',
     rollNo: 4,
     class: 8,
},
    {Name:'James',
     rollNo: 5,
     class: 5,
},
    {Name:'Ayaan',
     rollNo: 6,
     class: 10,
}
]
console.log(mixedDataTypes)



// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft,     Apple, IBM, Oracle and Amazon
const  itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.ceil(itCompanies.length/2)]);
console.log(itCompanies[6]);

// Print out each company Change each company name to uppercase one by one and print them out
console.log('facebook'.toUpperCase());
console.log('Google'.toUpperCase());
console.log('Microsoft'.toUpperCase());
console.log('Ibm'.toUpperCase());
console.log('Oracle'.toUpperCase());
console.log('Amazon'.toUpperCase());



// Print the array like as a sentence: Facebook,Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies. Using join() method

// Check if a certain company exists in the itCompanies array. If it exist return the company 
// else return a company is not found

let joinsentence= ['Facebook','Google', 'Microsoft', 'Apple', 'IBM','Oracle', 'and', 'Amazon','are', 'big', 'IT', 'companies']
console.log(joinsentence.join())

if (joinsentence.includes('Microsoft')) {
    console.log(true)
}
else {
    console.log('not found')
}



// Add 'Meat' in the beginning of your shopping cart if it has not been already added
var shoppingCart = ['Milk','Coffee','Tea','Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)



// add Sugar at the end of you shopping cart if it has not been already added
var shoppingCart = ['Milk','Coffee','Tea','Honey']
shoppingCart.push('Sugar')
console.log(shoppingCart)



// remove 'Honey' if you are allergic to honey
var shoppingCart = ['Milk','Coffee','Tea','Honey']
shoppingCart.splice(3, 1)
console.log(shoppingCart)



// modify Tea to 'Green Tea'
const Shoppingcart = "Milk, Coffee, Tea, Honey"
console.log(Shoppingcart.replace("Tea", 'GreenTea'));



// In countries array check if 'India' exists in the array if it exists print 'INDIA'. If it does not exist add to the countries list.
var Countries = [ 'zimbabwe', 'uganda', 'Turkmenistan','Papua', 'Kyrgyzstan']
console.log(Countries.includes('india'))

var addCountry = Countries.push('india')
console.log(Countries)



// Concatenate the following two arrays and store it in a fullStack variable.
let frontLang = ['HTML', 'CSS', 'JS', 'React']
let backLang = ['Node', 'Express', 'MongoDB']
console.log(frontLang.concat(backLang))



// The following is an array of 10 students ages
// Sort the array and find the min and max age
var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())

var minAge = Math.min(...ages)
var maxAge = Math.max(...ages)
var range = maxAge - minAge;

console.log(minAge)
console.log(maxAge)
console.log(range)



// Find the median age(one middle item or two middle items divided by two)
var middle = Math.floor(ages.length / 2);
var median = ages[middle];
console.log("The median age is: " + median);



// Find the average age (all items divided by number of items)
// Compare the value of (min - average) and (max - average), use abs() method
  var sum = 0;
for (var i = 0; i < ages.length; i++) {
  sum += ages[i];
}
var average = sum / ages.length;
console.log("The average age is: " + average);

function difference(a, b) {
    return Math.abs(a - b);
  }
console.log(difference(19, 26));



// You are developing a word game. Write a function that takes an array of words and returns a new array containing only the words with more than three letters.
const wordGame = (wordArray) => {
    const resultArray = [];
    
    for (const word of wordArray) {
      if (word.length > 3) {
        resultArray.push(word);
      }
    }
    
    return resultArray;
  }
  
  const inputArray = [ 'task', 'is', 'to', 'return', 'array', 'more', 'than', 'three', 'words'];
  const filteredWords = wordGame(inputArray);
  console.log(filteredWords);
  

  
// You are building a shopping cart. Write a JavaScript that removes an item from the cart based on the item's name
  function itemRemover() {
    var a = [ "Name: khan", "rollNo: 10" ];
    var b = [ 'Name: Abdul', 'rollNo: 15' ];
    var c = ['Name: abdullah', 'rollNo: 12'];
  
    a = a.filter(item => !item.startsWith('Name: khan'));
    b = b.filter(item => !item.startsWith('Name: Abdul'));
    c = c.filter(item => !item.startsWith('Name: abdullah'));
  
    console.log(a);
    console.log(b);
    console.log(c);
  }
  
  itemRemover();
  
  