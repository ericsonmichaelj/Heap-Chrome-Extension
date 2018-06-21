---
id: doc5
title: Event Logs
---

## Logging Clicks, Field Changes, and Submissions

The Heap Analytics Debugger will log a click, change and submit events as an "Event Fired". If you look further in the Event console group, you will see an event name. For clicks, chages, and form bumissions it will have the name `click`, `change`, and `submit` respectively.

It will also have properties as well. These events will have the event properties `DOM Hierachy` and `Target Text`. The DOM Hierachy

For example lets say you have a DOM like this
```
<body>
<div>
    <h1>Test</h1>
</div>
</body>
```
If you click on "Test", you would have clicked on both the div element and an h1 element. The DOM Hierachy will list the element in the outermost part of the DOM tree you clicked on first, with each line representing a smaller subset of the DOM.

The Target Text represents the text inside the DOM element, in this case clicking on "Test" would have a target Text of text. Since not all DOM elements have anything inside it (for example input elments), sometimes there will not be a target text, and the property will be listed as undefined.

## Logging Views

Any view events will be specified as a `View Event Fired`. It will have an event name of `view`. In addition to event properties, it will also display an additional property `url` which is the url the view was recorded on.

## Logging Custom Events

Any custom event fired using the heap API https://docs.heapanalytics.com/reference will display the name and properties called in `heap.track`
