
var debug = true;

chrome.action.onClicked.addListener(
    function(tab) {
        debug = !debug;
        var offIcon = {
            "16": "../resources/icon_off.png",
            "32": "../resources/icon_off.png",
            "48": "../resources/icon_off.png",
            "128": "../resources/icon_off.png"
        }
        var onIcon = {
            "16": "../resources/icon.png",
            "32": "../resources/icon.png",
            "48": "../resources/icon.png",
            "128": "../resources/icon.png"            
        }
        chrome.action.setTitle({
            title: debug ? 'Heap Analytics debugger is ON' : 'Heap Analytics debugger is OFF'
        });

        chrome.action.setIcon({
            path: debug ? '/resources/icon.png': '/resources/icon_off.png'
        });
    }
);

chrome.webRequest.onBeforeRequest.addListener(
    async(details) => {
        if (debug) {
            const response = await chrome.tabs.query({active: true, currentWindow: true});
            chrome.tabs.sendMessage(response[0].id, details)
        }
    },
    { urls: ["https://heapanalytics.com/*"] }, 
    ['requestBody']
);

