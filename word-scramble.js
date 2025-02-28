const prompt = require("prompt-sync")();

console.log("Welcome to the Terminal Word Scramble Game")

// Word List - Using Array to store the list of words
const words = [
    "javascript",
    "react",
    "function",
    "variable",
    "callback",
    "promise",
    "fetch",
    "await",
    "dom",
    "frontend",
    "node",
];


// Shuffles letters in the a word 
function shuffleWord(word){
    return word.split("").sort(()=> Math.random() - 0.5).join("");
}


// Test Shuffle Function
// console.log(shuffleWord(words[1]));

// Game Logic
function playGame(){
    // picks a random word from array 
const word = words[Math.floor(Math.random() * words.length)]
const scrambledWord = shuffleWord(word);
console.log(`Unscramble this word: ${scrambledWord}`)


}

playGame();


// let guess = prompt("Can you unscrabmle this word? Enter your guess! ");


