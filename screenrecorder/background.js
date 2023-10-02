/*global chrome*/

/*import { startRecording, stopRecording } from './recorder.js';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'start_recording') {

    startRecording();

  } else if (message.action === 'stop_recording') {

    stopRecording();
  }
});*/


// Handle messages between popup and content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'start_recording') {
    // Send a message to content script to start recording
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: startRecordingInContentScript,
      });
    });
  } else if (message.action === 'stop_recording') {
    // Send a message to content script to stop recording
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: stopRecordingInContentScript,
      });
    });
  }
});

// Function to start recording in content script
function startRecordingInContentScript() {
  // Implement recording logic in content.js
  // Example: startRecording();
}

// Function to stop recording in content script
function stopRecordingInContentScript() {
  // Implement stop recording logic in content.js
  // Example: stopRecording();
}



