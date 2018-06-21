---
id: api2
title: Event Fired
---

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
|:---------------------:|-------------|
| `User Info - identity` | identity of the user as it appers in heap analytics. If undefined, will appear as random identity in heap | 
| `Event - name`     | Any non-custom event will be called as **change**, **click**, or **submit**.  In Heap Analytics these shows up either as raw event or as  its event typed if defined. Can also be the name of a custom event    | 
| `Event - properties` | Event properties associated with the event. Could be added by the api or heap analytics |
|`Event - DOM Hierachy`| The DOM hierachy for which a **change**, **click**, or **submit** on the DOM. 
|`Event - Target Text`| Inner Text of **change**, **click** or **submit** event. If no inner text, it does not appear