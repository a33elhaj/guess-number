// Declare variables
let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get HTML elements
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Event Listener for button click
submit.addEventListener("click", checkGuess);

// Function to check the guess
function checkGuess() {
  const userValue = Number(guess.value);
  attempts++;

  // Using Conditionals
  if (userValue === randomNum) {
    hint.textContent = "مبــــروك لقد اخترت الرقم الصحيح!";
  } else if (userValue < randomNum) {
    hint.textContent = "أصغر من الرقم, حاول مرة اخرى.";
  } else {
    hint.textContent = "أكبر من الرقم, حاول مرة اخرى.";
  }

  // Display the number of attempts
  attemptsText.textContent = "عدد المحاولات: " + attempts;
}
