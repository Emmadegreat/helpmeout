
//chrome
let stream;
let mediaRecorder;
let chunks = [];
let mediaStream;
let recordedChunks = [];

function startRecording() {
  navigator.mediaDevices
    .getDisplayMedia({ video: true })
    .then((str) => {
      stream = str;
      const videoElement = document.createElement('video');
      videoElement.srcObject = stream;
      document.body.appendChild(videoElement);

      const options = { mimeType: 'video/webm' };
      mediaRecorder = new MediaRecorder(stream, options);

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        window.open(url);
        chunks = [];
        videoElement.remove();
      };

      mediaRecorder.start();
    })
    .catch((error) => {
      console.error('Error starting recording:', error);
    });
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();

    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }
}

function saveRecording() {
  if (recordedChunks.length === 0) {
    console.warn('No recorded data available.');
    return;
  }

  const blob = new Blob(recordedChunks, { type: 'video/webm' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'recorded-video.webm';

  a.click();
  recordedChunks = [];
};
