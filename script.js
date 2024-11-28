let score = 0;          // To track the score
let timeLeft = 10;      // Countdown timer
let isGameRunning = false; // Flag to track if the game is active

const clickButton = document.getElementById('click-button');
const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

// Disable the click button initially
clickButton.disabled = true;

// Handle click button action
clickButton.addEventListener('click', () => {
    if (isGameRunning) {
        score++;
        scoreDisplay.textContent = score; // Update score display
    }
});

// Handle start button action
startButton.addEventListener('click', () => {
    if (!isGameRunning) {
        startGame();
    }
});

function startGame() {
    score = 0;          // Reset score
    timeLeft = 10;      // Reset timer
    isGameRunning = true;

    // Update displays
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    // Enable the click button
    clickButton.disabled = false;

    // Start the countdown timer
    const timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer); // Stop the timer
            endGame();
        }
    }, 1000);
}

function endGame() {
    isGameRunning = false;      // Mark game as ended
    clickButton.disabled = true; // Disable the click button
    alert(`Game over! Your final score is ${score}`); // Show the score
}
