// Game Functio:
// - Player must guess a number between a min and a max number.
// - Player gets a certain number of guesses.
// Notify player of guesses remaining.
// - Notify player of the correct if they loose.
// Let player choose to play again.

// Game Values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, "red");
  }

  // Check if player chose winning number
  if (guess === winningNum) {
    // Game Over - Won
    gameOver(true, `${winningNum} is correct, YOU WIN!!!`);
  } else {
    // Wrong Number Chosen
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game Over - Lost
      gameOver(
        false,
        `Game over...you lost. The correct number was ${winningNum}.`
      );
    } else {
      // Game Continues - Answer Wrong

      // Change Border Color
      guessInput.style.borderColor = "red";

      // Clear Input
      guessInput.value = "";
      // Tell player its incorrect and inform of how many guesses left.
      setMessage(
        `${guess} is incorrect. You have ${guessesLeft} guesses left.`,
        "red"
      );
    }
  }
});

// Game Over Function
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // Disable Input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;

  // Set text color
  message.style.color = color;
  // Set Message
  setMessage(msg);
}

// Set Message Function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
