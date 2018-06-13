---
id: doc1
title: Getting Started
sidebar_label: Example Page
---

Check the [documentation](https://docusaurus.io) for how to use Docusaurus.

## What gets logged

The Heap Analytics Debugger logs information that is sent to the Heap Servers. Heap will send information about all views, clicks, field changes, and submissions unless you specified to heap that you do not want that information tracked (This is done through adding a heap-ignore attribute to an element). 


## Logging Clicks, Field Changes, and Submissions

## Logging Views

## Logging User Properties

## Logging Custom Events



## What Heap Analytics Debugger is not capable of doing

The Heap Analytics is NOT capable of logging the event definitions from the Event Visualizer. It is unable to access any events that is stored on the heap server. This includes combination events, wrappers for event custom events, and any event that uses the heap dashboard in anyway to create it. This is because the Heap Analytics Debugger cannot access data you need authentication to retrieve and is not an official Heap Analytics product. 

However, you can determine if your event definition was fired IF the event name and properties would match.

If you want to see if your event was fired, 