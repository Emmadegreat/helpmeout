/*document.addEventListener("DOMContentLoaded", () => {
    const start = document.querySelector("button#start_video");
    const stop = document.querySelector("button#stop_video");


    start.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "open_dialog_box" }, function (response) {
                if (!chrome.runtime.lastError) {
                    console.log(response);
                } else {
                    console.log(chrome.runtime.lastError, 'error');
                }
            })
        })
    })

})*/

let stream;
let mediaRecorder;
let chunks = [];

const videoElement = document.getElementById("video");
const startButton = document.getElementById("startRecord");
const pauseButton = document.getElementById("pauseRecord");
const resumeButton = document.getElementById("resumeRecord");
const stopButton = document.getElementById("stopRecord");
const toggleCameraButton = document.getElementById("toggleCamera");

startButton.addEventListener("click", startRecording);
pauseButton.addEventListener("click", pauseRecording);
resumeButton.addEventListener("click", resumeRecording);
stopButton.addEventListener("click", stopRecording);
toggleCameraButton.addEventListener("click", toggleCamera);

async function startRecording() {
  stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
  videoElement.srcObject = stream;

  const options = { mimeType: "video/webm" };
  mediaRecorder = new MediaRecorder(stream, options);

  mediaRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) {
      chunks.push(e.data);
    }
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    window.open(url);
    chunks = [];
  };

  mediaRecorder.start();
}

function pauseRecording() {
  mediaRecorder.pause();
}

function resumeRecording() {
  mediaRecorder.resume();
}

function stopRecording() {
  mediaRecorder.stop();
  stream.getTracks().forEach((track) => track.stop());
}

async function toggleCamera() {
  stream.getTracks().forEach((track) => track.stop());
  stream = await navigator.mediaDevices.getUserMedia({ video: true });
  videoElement.srcObject = stream;
}

const closeButton = document.getElementById("close");


closeButton.addEventListener("click", () => {
  const container = document.querySelector(".container");
  //container.style.display = "none"; // Hide the container
  // Or remove it from the DOM entirely
  container.remove();
})




/*
let stream;
let mediaRecorder;
let chunks = [];

const videoElement = document.getElementById("video");
const startButton = document.getElementById("startRecord");
const pauseButton = document.getElementById("pauseRecord");
const resumeButton = document.getElementById("resumeRecord");
const stopButton = document.getElementById("stopRecord");
const toggleCameraButton = document.getElementById("toggleCamera");

startButton.addEventListener("click", startRecording);
pauseButton.addEventListener("click", pauseRecording);
resumeButton.addEventListener("click", resumeRecording);
stopButton.addEventListener("click", stopRecording);
toggleCameraButton.addEventListener("click", toggleCamera);

const timerElement = document.getElementById("timer");

let startTime;
let timerInterval;

///global chrome
chrome.runtime.sendMessage({ action: 'start_recording' }, function(response) {
  console.log('Received response from background.js:', response);
});


async function startRecording() {

  clearInterval(timerInterval);
  timerElement.textContent = "00:00";


  // Use getDisplayMedia to capture the entire screen
  stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
  videoElement.srcObject = stream;

  const options = { mimeType: "video/webm" };
  mediaRecorder = new MediaRecorder(stream, options);

  mediaRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) {
      chunks.push(e.data);
    }
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    // Open the recording in a new tab
    window.open(url);

    // You can also save the recording using an API endpoint here
    saveRecording(blob);

    chunks = [];
    clearInterval(timerInterval);
  };

  mediaRecorder.start();
}

function updateTimer() {
  const currentTime = Math.floor((Date.now() - startTime) / 1000);
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
updateTimer();

function pauseRecording() {
  mediaRecorder.pause();
}

function resumeRecording() {
  mediaRecorder.resume();
}

function stopRecording() {
  mediaRecorder.stop();
  stream.getTracks().forEach((track) => track.stop());
}

async function toggleCamera() {
  stream.getTracks().forEach((track) => track.stop());
  stream = await navigator.mediaDevices.getUserMedia({ video: true });
  videoElement.srcObject = stream;
}

function saveRecording(blob) {
  // Implement saving the recording using an API endpoint
  // You can use fetch() or another method to send the recording data to your server
  // Example:
  // fetch("https://example.com/save-recording", {
  //   method: "POST",
  //   body: blob,
  // }).then((response) => {
  //   // Handle the server response
  // });
}*/


/* global chrome*/
/*document.addEventListener("DOMContentLoaded", function () {
  const startRecordingButton = document.getElementById("startRecording");
  const stopRecordingButton = document.getElementById("stopRecording");

  startRecordingButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "start_recording" });
  });

  stopRecordingButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "stop_recording" });
  });
});*/


/*document.addEventListener("DOMContentLoaded", function () {
  const startRecordingButton = document.getElementById("startRecording");
  const stopRecordingButton = document.getElementById("stopRecording");
  const saveRecordingButton = document.getElementById("saveRecording");

  startRecordingButton.addEventListener("click", function () {
    // Start the screen recording
    startRecording();
  });

  stopRecordingButton.addEventListener("click", function () {
    // Stop the screen recording
    stopRecording();
  });

  saveRecordingButton.addEventListener("click", function () {
    // Save the recorded video
    saveRecording();
  });
});*/


/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/background.js')
    .then((reg) => console.log(reg, 'registered'))
    .catch((error)=>console.log(error,'error'))
}

const startRecordingButton = document.getElementById("startRecording");
const stopRecordingButton = document.getElementById("stopRecording");
const saveRecordingButton = document.getElementById("saveRecording");

startRecordingButton.addEventListener("click", function () {
  // Start the screen recording
  chrome.runtime.sendMessage({ action: "start_recording" });
});

stopRecordingButton.addEventListener("click", function () {
  // Stop the screen recording
  chrome.runtime.sendMessage({ action: "stop_recording" });
});

saveRecordingButton.addEventListener("click", function () {
  // Save the recorded video
  chrome.runtime.sendMessage({ action: "save_recording" });
});*/
document.getElementById("startRecording").innerHTML = 'record';