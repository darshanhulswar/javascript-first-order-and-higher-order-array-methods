const companies = [
    { name: "Company one", category: "Finance", start: 1981, end: 2003 },
    { name: "Company two", category: "Retail", start: 1994, end: 2001 },
    { name: "Company three", category: "Auto", start: 1983, end: 2007 },
    { name: "Company four", category: "Retail", start: 1994, end: 2010 },
    { name: "Company five", category: "Technology", start: 1995, end: 2014 },
    { name: "Company six", category: "Finance", start: 1970, end: 2006 },
    { name: "Company seven", category: "Auto", start: 1960, end: 2011 },
    { name: "Company eight", category: "Telecommunication", start: 1981, end: 2003 },
    { name: "Company nine", category: "Airline", start: 1970, end: 2005 },
    { name: "Company eleven", category: "Auto", start: 1975, end: 2020 },
    { name: "Company twelve", category: "Retail", start: 1999, end: 2018 },
];

const ages = [23, 21, 21, 21, 21, 20, 20, 19, 17, 18, 42, 39, 56, 30, 24, 38, 45, 90, 23, 58];

// Higher Order Array Methods

// forEach() - Loop throough an array in more elegant way
// companies.forEach(function (company, index, companies) {
//     console.log(company.name)
// });

// filter() - returbs an array based on the callback functions logic
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// every() - checks every elements of an array passes the condition or not and returns true if passes all else false
// console.log(ages.every(age => age >= 2));

// find() - returns first find in an array
// let found = ages.find(element => element == 20);
// console.log(found);

// map() The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// console.log(ages.map(age => age - 2));

// sort() - sprts an arrat based on UTF-16 unit values of an array element
// console.log(ages.sort((age1, age2) => age1 - age2));

// reduce() - returns a single value based on the callback function
// console.log(ages.reduce((ageTotal, age) => age + ageTotal));

// -----------------------------------------------------------------------

// First Order Array Methods

// indexOf() - returns index of an element within an array. If not found returns -1
// console.log(ages.indexOf(19));

// includes() - returns true if found otherwise returns false
// console.log(ages.includes(19999));

// reverse() - destructing method reverses an array
// console.log(ages.reverse());