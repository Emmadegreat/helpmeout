let mediaStream = null;
let mediaRecorder = null;
let recordedChunks = [];

// Function to start the screen recording
function startRecording(){
  if (mediaRecorder && mediaRecorder.state === "recording") {
    console.warn("Recording is already in progress.");
    return;
  }


  navigator.mediaDevices
    .getDisplayMedia({ video: true })
    .then((stream) => {
      mediaStream = stream;


      mediaRecorder = new MediaRecorder(stream);


      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };

      mediaRecorder.start();
    })
    .catch((error) => {
      console.error("Error accessing screen capture:", error);
    });
}

const stopRecording=()=> {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();


    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }
}


const saveRecording=()=> {
  if (recordedChunks.length === 0) {
    console.warn("No recorded data available.");
    return;
  }

   const blob = new Blob(recordedChunks, { type: "video/webm" });

  const url = URL.createObjectURL(blob);

  window.open(url);

  recordedChunks = [];
}

export { startRecording, stopRecording, saveRecording };
