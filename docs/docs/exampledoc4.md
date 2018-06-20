---
id: doc4
title: API
---

## View Event Fired

Logs the following:

Eg.

```
Heap Analytics: View Event Fired (Log #1)
User Info
    Identity: foo
Event
    Name: view
    Properties:
        Logged In: true
Url: test.com
```

| Item Logged   | Description   |
| ------------- |:-------------:|
| `User Info - identity` | identity of the user as it appers in heap analytics | 
| `Event - name`     | Named as **view**. In Heap Analytics it shows up either as raw event or as a view type event if defined     | 
| `Event - properties` | Event properties associated with the event. Could be added by the api or heap analytics |
| `Url ` | Name of url that was viewed

## Event Fired

Logs the following:

Eg.

```
Heap Analytics: Event Fired (Log #1)
User Info
    Identity: foo
Event
    Name: bar
    Properties:
        Logged In: true
        DOM Hierachy
            div
            h1
        Target Text: Hello World

```

| Item Logged           | Description   |
| --------------------- |:-------------:|
| `User Info - identity` | identity of the user as it appers in heap analytics | 
| `Event - name`     | Any non-custom event will be called as **change**, **click**, or **submit**.  In Heap Analytics these shows up either as raw event or as  its event typed if defined. Can also be the name of a custom event    | 
| `Event - properties` | Event properties associated with the event. Could be added by the api or heap analytics |
|`Event - properties (DOM Hierachy)`| The DOM hierachy for which a **change**, **click**, or **submit** on the DOM. 
|`Event - properties (Target Text)`| Inner Text of **change**, **click** or **submit** event.

## User Properties added

Logs the following:

Eg.

```
Heap Analytics: Event Fired (Log #1)
User Info
    Identity: foo
    User Properties
        isCustomer: True
```

| Item Logged           | Description   |
| --------------------- |:-------------:|
| `User Info - identity` | identity of the user as it appers in heap analytics | 
| `User Info - User Properties`     | User properties associated with user. Could be added by the api or heap analytics. These properties will live with the user throughout its journey. Is not an exhaustive list of all user properties, just the one's added |








