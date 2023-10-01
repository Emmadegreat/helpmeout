document.addEventListener("DOMContentLoaded", () => {
    const start = document.querySelector("button#start_video");
    const stop = document.querySelector("button#stop_video");


    start.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "open_dialog_box" }, function (response) {
                if (!chrome.runtime.lastError) {
                    console.log(response);
                }
            })
        })
    })

})