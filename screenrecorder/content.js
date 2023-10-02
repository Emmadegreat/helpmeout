
let mediaRecorder;
let chunks = [];
let isRecording = false;

// Function to start screen recording
function startRecording() {
  if (isRecording) {
    console.log('Recording is already in progress.');
    return;
  }

  // Your code to start screen recording using the MediaRecorder API
  // Example:
  navigator.mediaDevices
    .getDisplayMedia({ video: true })
    .then((stream) => {
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);


        window.open(url);

        isRecording = false;
        chunks = [];
      };

      mediaRecorder.start();
      isRecording = true;
    })
    .catch((error) => {
      console.error('Error starting recording:', error);
    });
}

function stopRecording() {
  if (!isRecording) {
    console.log('No recording in progress.');
    return;
  }

  // Your code to stop screen recording
  // Example:
  mediaRecorder.stop();
}


/*global chrome*/
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'start_recording') {
    startRecording();
  } else if (message.action === 'stop_recording') {
    stopRecording();
  }
});
