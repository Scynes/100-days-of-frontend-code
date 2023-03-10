let minutes = 2 * 60;

let shortBreak = 5;

let longBreak = 15;

let currentTime = minutes;

let interval;

const stopTimer = () => {
    clearInterval(interval);
}

const startTimer = () => {

    const START = document.querySelector('.start');
    const PAUSE = document.querySelector('.pause');

    START.style.display = 'none';
    PAUSE.style.display = 'block';

    interval = setInterval(updateTimer, 1000);
}

const pauseTimer = () => {
    stopTimer();

    const START = document.querySelector('.start');
    const PAUSE = document.querySelector('.pause');

    PAUSE.style.display = 'none';
    START.style.display = 'block';
}

const updateTimer = () => {

    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;

    const TIME = document.querySelector('.time');

    TIME.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    updateProgress();

    currentTime--;

    if (currentTime < 0) 
        stopTimer();
    
}

const updateProgress = () => {

    const PROGRESS_RING = document.querySelector('.progress-ring__circle');

    const percentComplete = ((minutes - currentTime) / minutes) * 100;

    console.log(percentComplete)
    PROGRESS_RING.style.setProperty('--progress', percentComplete)
}

const setTimer = () => {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;

    const TIME = document.querySelector('.time');

    TIME.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

const openSettings = () => {

    const MODAL = document.querySelector('.settings-modal-container');

    MODAL.style.display = 'block';
}

const applySettings = () => {

    const MODAL = document.querySelector('.settings-modal-container');
    const POMODORO = document.getElementById('pomodoro');
    const SHORT_BREAK = document.getElementById('short-break');
    const LONG_BREAK = document.getElementById('long-break');

    minutes = POMODORO.value * 60;
    shortBreak = SHORT_BREAK.value;
    longBreak = LONG_BREAK.value;
    currentTime = minutes;

    setTimer();

    MODAL.style.display = 'none';
}