---
id: doc1
title: Getting Started
sidebar_label: Example Page
---

Check the [documentation](https://docusaurus.io) for how to use Docusaurus.

## What gets logged

The Heap Analytics Debugger logs information that is sent to the Heap Aanlytics servers. Heap will send information about all views, clicks, field changes, and submissions unless you specified to heap that you do not want that information tracked (This is done through adding a heap-ignore attribute to an element). 

In addition, each event will fire information about the User. It includes the `identity` which is the identity you use in heap analytics to search for a specific user. In addition, if any user properties are added to the user, it will be logged with the title `User Properties added`

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

## Logging Event Properties

All Event Properties are listed under the Event group under properties. These can include event properties that are created under `addEventProperties` or event properties that heap analytics adds for you.

## Logging User Properties

Any heap anlyytics logs listed as a `User Property added` will display under `User Info` the `User Properties`. 
**Note:** This does not include an exhaustive list of all User Properties. Nor will these user properties continue to appear in future event calls even though the user properties are still there.

## Logging Custom Events

Any custom event fired using the heap API https://docs.heapanalytics.com/reference will display the name and properties called in `heap.track`


## What Heap Analytics Debugger is not capable of doing

The Heap Analytics is NOT capable of logging the event definitions from the Event Visualizer. It is unable to access any events that is stored on the heap server. This includes combination events, wrappers for event custom events, and any event that uses the heap dashboard in anyway to create it. This is because the Heap Analytics Debugger cannot access data that you need authentication to retrieve and is not an official Heap Analytics product. 

However, you can determine if your event definition was fired IF the event name and properties would match that definition. It is also capable of logging event definitions that come from the custom event Heap API.