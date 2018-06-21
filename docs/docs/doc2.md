---
id: doc2
title: What Gets Logs and Capabilities
---

## What gets logged

The Heap Analytics Debugger logs information that is sent to the Heap Aanlytics servers. Heap will send information about all views, clicks, field changes, and submissions unless you specified to heap that you do not want that information tracked (This is done through adding a heap-ignore attribute to an element). 

In addition, each event will fire information about the User. It includes the `identity` which is the identity you use in heap analytics to search for a specific user. If it is undefined, then heap will give the user a random generated value. In addition, if any user properties are added to the user, it will be logged with the title `User Properties added`

## What Heap Analytics Debugger is not capable of doing

The Heap Analytics is NOT capable of logging the event definitions from the Event Visualizer. It is unable to access any events that is stored on the heap server. This includes combination events, wrappers for event custom events, and any event that uses the heap dashboard in anyway to create it. This is because the Heap Analytics Debugger cannot access data that you need authentication to retrieve and is not an official Heap Analytics product. 

However, you can determine if your event definition was fired IF the event name and properties would match that definition. It is also capable of logging event definitions that come from the custom event Heap API.