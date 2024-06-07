chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const heapLogger = new HeapLogger(request.url);
    heapLogger.run();
  }
);