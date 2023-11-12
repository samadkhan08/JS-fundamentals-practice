//[  MAPS ]


// Use map to create a new array by changing each course to uppercase in the course array.
var languages= ['html', 'css', 'js']
var uppercaseLangs= languages.map(langs => langs.toUpperCase())
console.log(uppercaseLangs)


// Use map to create a new array by changing each number to square in the numbers array
var nums= [2, 4, 6, 8]
var toSquarenums= nums.map((square) => square*square)
console.log(toSquarenums)



// You have an array of objects with products and their prices. Use the map function to create a new array containing the products' names only.
var products= [
    {Name: 'shoes', price: 500},
    {Name: 'jacket', price: 1000},
    {Name: 'watch', price: 5000}
]
var productNames= products.map((Namesonly) => Namesonly.Name)
console.log(productNames)



// You have an array of temperatures in Celsius. Use the map function to convert each temperature to Fahrenheit using the formula (Celsius * 9/5) + 32.
var Celsius= [24, 30, 12, 34]
var tempTofahren= Celsius.map(Celsius => (Celsius * 9/5) + 32)
console.log(tempTofahren)



// You have an array of objects representing students with names and ages. Use the map function to create a new array of objects with the students' names and their year of birth. Assume the current year is 2023.
var studentsData= [ 
    { name: "Amer", age: 24 }, 
    { name: "Adil", age: 16 }, 
    { name: "Amaan", age: 18 } 
]
var Studentsdob= studentsData.map(dob => 2023-dob.age)
console.log(Studentsdob)




//[ Filter ]


// Use the filter to create a new array containing only even numbers.
var evenNums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var filterEvenNums= evenNums.filter(nums => nums%2===0)
console.log(filterEvenNums)


// Use filter to filter out countries having less than 6 character.
var countries = [ 'india', 'canada', 'spain', 'turkey', 'nepal', 'japan', 'itlay', 'ethiopia', 'egypt']
var filterCountries= countries.filter(countriesOut => countriesOut.length<6)
console.log(filterCountries)


// Use filter to filter out country start with 'E';
var countriesTwo = [ 'india', 'canada', 'spain', 'turkey', 'nepal', 'japan', 'itlay', 'ethiopia', 'egypt']
var countryStartsE= countriesTwo.filter(countrywithE => countrywithE.startsWith('e'))
console.log(countryStartsE)



// You have an array of objects representing employees. Use the filter function to create a new array containing only employees who have a salary greater than or equal to 50,000
var employees= [
    { Name: 'Robert', Salary: 35000},
    { Name: 'Harry', Salary: 50000},
    { Name: 'David', Salary: 55000},
    { Name: 'Jack', Salary: 40000},
    { Name: 'Cooper', Salary: 60000}
]
var highSalaryemp= employees.filter(filterSalary => filterSalary.Salary>=50000)
console.log(highSalaryemp)





//[ Reduce ]


// Use the reduce function to calculate the sum of all numbers in the array. The out put should be in the array.
var sumOfallNums= [ 1, 2, 3, 4]
var newSumofAllnums= sumOfallNums.reduce((acc, curr) => acc + curr)
console.log([newSumofAllnums])


// You have an array of strings. Use the reduce function to concatenate all strings in the array into a single sentence.
var arrOfstrings= ["all", "strings", "in", "the", "array", "into", "a", "single", "sentence."]
var newArrofStrings = arrOfstrings.reduce((acc, curr) => acc + " " + curr," ");
console.log(newArrofStrings.trim())


// You have an array of objects representing products with prices. Use the reduce function to calculate the total price of all products.
var productItems= [
    {productName: 'Mens shoes', productPrice: 1500},
    {productName: 'Airpods', productPrice: 10000},
    {productName: 'Keychian', productPrice: 200},
    {productName: 'Room Spray', productPrice: 700}
]
var totalPriceofProduct= productItems.reduce((acc, curr) => acc + curr.productPrice, 0);
console.log(totalPriceofProduct)



// You have an array of transactions where each transaction is an object with a type ("debit" or "credit") and an amount. Use the reduce function to calculate the account balance. Debits reduce the balance, and credits increase it.
var accountBalance= [ 
    { type: "debit", amount: 50 }, 
    { type: "credit", amount: 100 }, 
    { type: "debit", amount: 30 }, 
]
var calcAccountbalance = accountBalance.reduce((acc, curr) => {
    if (curr.type === "debit"){
        return acc - curr.amount
    } 
    else if (curr.type === "credit"){
        return acc + curr.amount
    }
    return acc;
}, 0)
console.log(calcAccountbalance)

