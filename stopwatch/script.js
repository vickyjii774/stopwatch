let hourss = document.getElementById("hourss");
let minutess = document.getElementById("minutess");
let secondss = document.getElementById("secondss");
let msecondss = document.getElementById("msecondss");

let startTime = 0;
let elapsedTime = 0;
let timer = null;
let isRunning = false;

let stopBtn = document.getElementById("myStop");

// START
document.getElementById("myStart").onclick = function () {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
    stopBtn.textContent = "Stop";
  }
};

// RESET
document.getElementById("myReset").onclick = function () {
  clearInterval(timer);
  elapsedTime = 0;
  isRunning = false;

  hourss.textContent = "00:";
  minutess.textContent = "00:";
  secondss.textContent = "00:";
  msecondss.textContent = "00";

  stopBtn.textContent = "Stop";
};

// STOP / RESUME
document.getElementById("myStop").onclick = function () {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    stopBtn.textContent = "Resume";
  } else {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
    stopBtn.textContent = "Stop";
  }
};

// UPDATE TIME
function update() {
  elapsedTime = Date.now() - startTime;

  let hour = Math.floor(elapsedTime / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");

  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");

  let seconds = Math.floor((elapsedTime / 1000) % 60)
    .toString()
    .padStart(2, "0");

  let milliseconds = Math.floor((elapsedTime % 1000) / 10)
    .toString()
    .padStart(2, "0");

  hourss.textContent = `${hour}:`;
  minutess.textContent = `${minutes}:`;
  secondss.textContent = `${seconds}:`;
  msecondss.textContent = ` ${milliseconds}`;
}
window.onload = () => {
  clearInterval(timer);
  elapsedTime = 0;
  isRunning = false;

  hourss.textContent = "00:";
  minutess.textContent = "00:";
  secondss.textContent = "00:";
  msecondss.textContent = "00";

  document.getElementById("myStop").textContent = "Stop";
};
