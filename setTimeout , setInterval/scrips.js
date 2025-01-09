const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');


let startTime = 0;
let elapsedTime = 0;
let timerInterval; 


function start() {
  setInterval(()=>{
    startTime++;
    if (startTime<=60) {
      timerDisplay.textContent=
    }
    seconds = (startTime < 61) ? "0" + seconds : seconds;
    timerDisplay.textContent = formatTime(elapsedTime);
  },1000)
}

function timer(time){
  if (time<=60) {
    
  }
}



function formatTime(milliseconds) {
  let seconds = Math.floor((milliseconds / 1000) % 60);
  let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

  seconds = (seconds < 10) ? "0" + seconds : seconds;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  hours = (hours < 10) ? "0" + hours : hours;

  return hours + ":" + minutes + ":" + seconds;
}

function startTimer() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
  console.log(startTime);
  
    
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      console.log(elapsedTime);
      
      timerDisplay.textContent = formatTime(elapsedTime);
    }, 10); // Update every 10 milliseconds for better precision
    timerDisplay.classList.add('running');
    timerDisplay.classList.remove('paused');
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerDisplay.classList.remove('running');
  timerDisplay.classList.add('paused');
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  timerDisplay.textContent = formatTime(elapsedTime);
  timerDisplay.classList.remove('running');
  timerDisplay.classList.remove('paused');
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);