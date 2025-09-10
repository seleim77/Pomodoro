const startEL = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");


let timeLeft = 1500;
let timerId = null;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerEl.innerText = `${minutes}:${seconds.toString().padStart(2,"0")}`;
}

function startTimer() {
    if (timerId) return;

     timerId = setInterval(() => {
    timeLeft--;
    updateDisplay();
    console.log(timeLeft);

    if (timeLeft <= 0) {
        clearInterval(timerId);
        timerId = null;
        console.log("Pomodoro Done");
    }
}, 1000);

}

function stopTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTime() {
    stopTimer();
    timeLeft = 1500;
    updateDisplay();
}

startEL.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTime);

updateDisplay();