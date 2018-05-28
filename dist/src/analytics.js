chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('this is queryString', queryString)
    return;
  }
);