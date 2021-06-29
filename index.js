const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let milliSeconds = 0,
    seconds = 0, 
    minutes = 0, 
    hours = 0;

const startTime = () => {
    seconds += 1;
    if (seconds === 60) {
        seconds = 0;
        minutes += 1; 
        
        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
    }
};

let intervalId; 
startButtonTag.addEventListener("click", () => {
    intervalId = setInterval (startTime, 1000);
});

pauseButtonTag.addEventListener("click", () => {
    clearInterval(intervalId);
});


