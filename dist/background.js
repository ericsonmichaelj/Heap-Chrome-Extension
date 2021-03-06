
var debug = true;

chrome.browserAction.onClicked.addListener(
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
        chrome.browserAction.setTitle({
            title: debug ? 'Heap Analytics debugger is ON' : 'Heap Analytics debugger is OFF'
        });

        chrome.browserAction.setIcon({
            path: debug ? '/resources/icon.png': '/resources/icon_off.png'
        });
    }
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (debug) {
            chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, details);
            });
        }
    },
    { urls: ["https://heapanalytics.com/*"] }, ['requestBody', 'blocking']
);

/* Check whether new version is installed */
chrome.runtime.onInstalled.addListener(function(details) {
    /* other 'reason's include 'update' */
    if (details.reason == "install") {
        /* If first install, set uninstall URL */
        var uninstallGoogleFormLink = 'https://docs.google.com/forms/d/1b-o3WaJTNaqZ-fiLOL-WVdpU1NwO74rU2iHZf5Tzi-Q/viewform?edit_requested=true';
        /* If Chrome version supports it... */
        if (chrome.runtime.setUninstallURL) {
            chrome.runtime.setUninstallURL(uninstallGoogleFormLink);
        }
    }
});