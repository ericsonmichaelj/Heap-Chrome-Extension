---
id: doc3
title: Contributing
---

## Reporting an issue

Any feedback on bugs, ideas for features, or questions about the Heap Analytics Debugger Chrome Extension is welcome and highly encouraged. Please report issues to the github repository: https://github.com/ericsonmichaelj/Heap-Chrome-Extension/issues

If you do not have a github profile, you can also report issues on the support page:

https://chrome.google.com/webstore/detail/heap-analytics-debugger/bihllkinhojjiacepgoipnppiiigbekj/support

I should reply to you within a day. However, if I do not respond, you can email at ericson.michael.j@gmail.com

##  Development

### Getting Started

If you just want to run the chrome extension locally, in chrome://extensions/ make sure you are in developer mode and pack and unload extension from the `dist/` folder

### Running the Tests

The test runner runs heap analytics. You can get a free heap id with registration. Place the heap id in a JSON string in `templates/index.json` with key id and the value of the id.

However the tests for heapLogger do not need to use heap. The only tests that will fail will be for ensuring heap is there.

Make sure that your produced index.html file goes into the project folder. If it does not appear there make a change in -o for compile-template script or ensure that heap-chrome-extension is in your home directory

### Updating Documentation

These documentations were made with docusaurus and can be found in the docs folder. To learn more read here: https://docusaurus.io/. 

### Pull Requests

Just create a pull request to master, state the reason for the change and I'll take a look at it. I am not really picky when it comes to approving pull requests, so long as there are tests and the tests pass. I should get to your pull request within a day. If I do not respond to your pull request within a day, you can reach me at ericson.michael.j@gmail.com.
