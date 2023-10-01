/*chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId },
            files:['./content.js']
        }).then(()=>{
            console.log('script injected');
        }).catch(error => {
            console.log('there is error', error);
        })


    }
})*/