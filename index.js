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