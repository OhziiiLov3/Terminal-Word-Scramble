# Terminal-Word-Scramble
# Word Scramble Game - Keith Baskerville 

## Description
A simple terminal-based word scramble game where players must guess the original word from a scrambled version.

## How to Play
1. Run `node word-scramble.js`
2. A scrambled word will appear.
3. Type your guess and press Enter.
4. If incorrect, you'll get a hint after the first wrong guess.
5. You have 3 attempts before the game ends.

## Technologies Used
- JavaScript (Node.js)
- prompt-sync for user input

## Features
- Randomized word selection
- Hint system after one wrong guess
- Simple user-friendly interface



In this tutorial, we will build a Word Scramble Game in the terminal using JavaScript and prompt-sync:

- ✅ Strings & Arrays (manipulating words)
- ✅ Loops & Conditions (handling user guesses)
- ✅ Randomization (shuffling words)
- ✅ User Input (using prompt-sync)

## Step 1: Set Up Your Environment
### Install prompt-sync
```sh
npm install prompt-sync
```

## Step 2: Create the Game File

Create a file called word-scramble.js and open it in your code editor.

At the top of the file, import prompt-sync so we can take user input:
```js
const prompt = require("prompt-sync")();
```

## Step 3: Define the Word List
### We will use list of words that the player will unscramble. 
✅ Arrays are an ideal choice for a terminal word scramble game because they allow:

- Efficient storage &  easy access to words.
- Randomize the selection for each round.
- Easy scrambling using string-to-array conversions.
- Scalability, allowing hints, difficulty levels, and expansions.

```js
const words = [
  "javascript",
  "developer",
  "function",
  "variable",
  "callback"
];
```
## Step 4: Create a Function to Shuffle Words

We need a way to shuffle the letters in a word. We’ll create a function called shuffleWord that takes a word, splits it into an array, randomizes the order, and joins it back into a string.

```js
function shuffleWord(word) {
  return word.split("").sort(() => Math.random() - 0.5).join("");
}
```

Test `shuffleWord()`: 

```js
shuffleWord("javascript"); // Might return "avascijrpt"
```
## Step 5: Set Up the Game Logic
Now, we’ll create the `playGame()` function that controls the game flow.

### Pick a Random Word
Inside `playGame()`, select a random word from our array:
```js
const word = words[Math.floor(Math.random() * words.length)];
```
### Scramble the Word
```js
const scrambled = shuffleWord(word);
```
### Display the Scrambled Word
```js
console.log(`Unscramble this word: ${scrambled}`);
```
### Set Up Attempt Limit
```js
let attempts = 3;
```

## Step 6: Handle User Input and Guessing
Now, we’ll use a while loop to keep asking for input until the player wins or runs out of attempts.
```js
while (attempts > 0) {
  let guess = prompt("Your guess: ").toLowerCase();
}
```
### Check if the Guess is Correct
Inside the `while loop` check if the guess is correct
```js
if (guess === word) {
  console.log("🎉 Correct! You win!");
  return;
}
```
## Step 7: Add a Hint System
If the player guesses incorrectly for the first time, we will give them a hint by revealing the first two letters of the word.

```js
let hintGiven = false; // add under attempts before while loop

if (!hintGiven) {
  console.log(`❌ Wrong! Here's a hint: The word starts with "${word.slice(0, 2)}"`);
  hintGiven = true; 
} else {
  console.log(`❌ Wrong! ${attempts} attempts left.`);
}
```

## Step 8: Handle Losing the Game
```js
console.log(`💀 Game over! The word was "${word}".`);
```
## Step 9: Put Everything Together
```js
function playGame() {
  const word = words[Math.floor(Math.random() * words.length)];
  const scrambled = shuffleWord(word);
  let attempts = 3;
  let hintGiven = false;

  console.log(`Unscramble this word: ${scrambled}`);

  while (attempts > 0) {
    let guess = prompt("Your guess: ").toLowerCase();

    if (guess === word) {
      console.log("🎉 Correct! You win!");
      return;
    } else {
      attempts--;

      if (attempts > 0) {
        if (!hintGiven) {
          console.log(`❌ Wrong! Here's a hint: The word starts with "${word.slice(0, 2)}"`);
          hintGiven = true;
        } else {
          console.log(`❌ Wrong! ${attempts} attempts left.`);
        }
      } else {
        console.log(`💀 Game over! The word was "${word}".`);
      }
    }
  }
}
```
## Step 10: Start the Game
```js
playGame();
```
# Complete ✅🎉🚀
