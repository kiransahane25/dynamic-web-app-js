// Number Guessing Game (Node.js version)

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let randomNumber = Math.floor(Math.random() * 10) + 1;

rl.question("Guess a number between 1 and 10: ", function(guess) {
    guess = Number(guess);

    if (guess === randomNumber) {
        console.log("🎉 Correct!");
    } else if (guess > randomNumber) {
        console.log("Too high! Number was " + randomNumber);
    } else {
        console.log("Too low! Number was " + randomNumber);
    }

    rl.close();
});