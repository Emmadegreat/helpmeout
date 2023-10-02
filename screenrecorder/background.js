/*global chrome*/

import { startRecording, stopRecording } from './recorder.js';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'start_recording') {

    startRecording();

  } else if (message.action === 'stop_recording') {

    stopRecording();
  }
});




