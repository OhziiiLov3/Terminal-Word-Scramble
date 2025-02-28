# Terminal-Word-Scramble
# Word Scramble Game

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


