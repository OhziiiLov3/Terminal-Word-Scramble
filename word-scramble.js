const { log } = require("node:console");

const prompt = require("prompt-sync")();

console.log("🚨 Welcome to the Javascript Terminal Word Scramble Game 🚨\nhint it's a Javascript term");

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
function shuffleWord(word) {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

// Test Shuffle Function
// console.log(shuffleWord(words[1]));

// Game Logic
function playGame() {
  // picks a random word from array
  const word = words[Math.floor(Math.random() * words.length)];
  const scrambledWord = shuffleWord(word);
  console.log(`Can you Unscramble this word: ${scrambledWord} 🤔`);

  // guess attemots
  let attempts = 3;
  let hintGiven = false;

  while (attempts > 0) {
    let guess = prompt("Enter your guess: ").toLowerCase();
    if (guess === word) {
      console.log("🎉 Correct! You win!");
      return;
    } else {
      attempts--;
      if (attempts > 0) {
        if (!hintGiven) {
          console.log(
            `❌ Wrong! Here's a hint: The word starts with "${word.slice(
              0,
              2
            )}" `
          );
        } else {
          console.log(`❌ Wrong! ${attempts} attempts left.`);
        }
      } else {
        console.log(`💀 Game over! The word was "${word}".`);
      }
    }
  }
}

playGame();

// let guess = prompt("Can you unscrabmle this word? Enter your guess! ");
