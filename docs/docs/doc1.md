---
id: gettingStarted
title: Installation & Usage
---

## Installation

Click [here](https://chrome.google.com/webstore/detail/heap-analytics-debugger/bihllkinhojjiacepgoipnppiiigbekj/support?hl=en) to install on chrome. Once you see an orange icon with bar charts that appears as the logo for this website, you'll know its installed.

## Manual Installation

Manually installation is a way to install the project without going to the chrome extension store.

* Go to the [github page](https://github.com/ericsonmichaelj/Heap-Chrome-Extension) and either Clone or Download the repository.
* Go to chrome://extensions/. Make sure you are in developer mode and click `Load Unpacked`
![Chrome Extension Page](/Heap-Chrome-Extension/img/chrome_extensions.png)
* Select `dist` from Heap Chrome Extension as the package directory. 

For more information on manual installation see the documentation on chrome extensions:

https://developer.chrome.com/extensions/getstarted#unpacked





## Usage

To turn off the heap analytics debugger, click the icon and it will turn gray indicating it is off.

Open your developer tools and the logs for the heap analytics debugger will appear. Try any site that has heap analytics installed (**Hint:** Try this site). You should start seeing logs for events named `view` and `click` whenever you view a page or click on a page.

