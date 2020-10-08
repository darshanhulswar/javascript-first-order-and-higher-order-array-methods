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


// Vowels and Consonants Solved on Hackerrank
const array = [23, 21, 42, 39, 56, 30, 24, 38, 45, 90, 23, 58];

const vowels = ['a', 'e', 'i', 'o', 'u'];

str = "javascriptloops";
const vowelsChars = [];
const consonantChars = [];

str.split("").map(char => {
    if (char != " ") {
        if (vowels.includes(char)) {
            vowelsChars.push(char);
        } else {
            consonantChars.push(char);
        }
    }
})

consonantChars.join(" ");

vowelsChars.forEach(char => console.log(char));
consonantChars.forEach(char => console.log(char))