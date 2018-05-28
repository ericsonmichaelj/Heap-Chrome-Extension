# Hep Chrome Extension

Heap Analytics is an analytics tool: https://heapanalytics.com/

This is an open source project for the following chrome extension https://tinyurl.com/yddoelpl and  is not affiliated with heap analytics in anyway.

### Getting Started

If you just want to run the chrome extension locally, in [chrome://extensions/](chrome://extensions/)  make sure you are in developer mode and pack and unload extension from the `dist/` folder

### Running Tests

The test runner runs heap analytics. You can get a free heap id with registration. Place the heap id in a JSON string in `templates/index.json` with key id and the value of the id. 

**Note:** The tests for heapLogger do not need to use heap

Make sure that your index.html file that gets produced goes into the project folder. If it does not appear there make a change in `-o` for `compile-template` script or ensure that `heap-chrome-extension` is in your home directory

### Contributing

Create an issue or create a pull request in master. All contributions welcome!


