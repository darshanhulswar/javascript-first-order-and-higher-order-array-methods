// Vowels and Consonants Solved on Hackerrank
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