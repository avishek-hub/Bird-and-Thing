const birds = ["Sparrow", "Peacock", "Crow", "Eagle", "Parrot"];
const things = ["Table", "Chair", "Car", "Book", "Pen"];

function startGame() {
    const gameArea = document.getElementById("game-area");
    const circle = document.getElementById("circle");
    const players = document.getElementById("players").value;

    gameArea.style.display = "block";
    circle.innerHTML = "";

    // Create circle divs for fingers
    for (let i = 0; i < players; i++) {
        const finger = document.createElement("div");
        finger.textContent = i + 1;
        finger.dataset.index = i;
        circle.appendChild(finger);
    }

    startCountdown();
}

function startCountdown() {
    const timer = document.getElementById("timer");
    let countdown = 3;

    const interval = setInterval(() => {
        timer.textContent = `Countdown: ${countdown}`;
        if (countdown === 0) {
            clearInterval(interval);
            playGame();
        }
        countdown--;
    }, 1000);
}

function playGame() {
    const prompt = document.getElementById("prompt");
    const allWords = [...birds, ...things];
    const randomWord = allWords[Math.floor(Math.random() * allWords.length)];

    prompt.textContent = randomWord;

    setTimeout(() => {
        if (birds.includes(randomWord)) {
            alert("It's a bird! Remove your finger!");
        } else {
            alert("It's a thing! Keep your finger!");
        }
        resetGame();
    }, 2000);
}

function resetGame() {
    const gameArea = document.getElementById("game-area");
    gameArea.style.display = "none";
}