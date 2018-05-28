chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    HeapLogger.init(request.url)
  }
);