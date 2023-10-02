let stream;
let mediaRecorder;
let chunks = [];

const videoElement = document.getElementById("video");
const startButton = document.getElementById("startRecord");
const pauseButton = document.getElementById("pauseRecord");
//const resumeButton = document.getElementById("resumeRecord");
//const stopButton = document.getElementById("stopRecord");
const toggleCameraButton = document.getElementById("toggleCamera");

startButton.addEventListener("click", startRecording);
pauseButton.addEventListener("click", pauseRecording);
//resumeButton.addEventListener("click", resumeRecording);
//stopButton.addEventListener("click", stopRecording);
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

//function resumeRecording() {
  //mediaRecorder.resume();
//}

//function stopRecording() {
  //mediaRecorder.stop();
  //stream.getTracks().forEach((track) => track.stop());
//}

async function toggleCamera() {
  stream.getTracks().forEach((track) => track.stop());
  stream = await navigator.mediaDevices.getUserMedia({ video: true });
  videoElement.srcObject = stream;
}

const closeButton = document.getElementById("close");


closeButton.addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.style.display = "none";
  container.remove();
})