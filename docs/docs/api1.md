---
id: api1
title: View Event Fired
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
|:---------------------:|-------------|
| `User Info - identity` | identity of the user as it appers in heap analytics. If undefined, will appear as random identity in heap | 
| `Event - name`     | Named as **view**. In Heap Analytics it shows up either as raw event or as a view type event if defined     | 
| `Event - properties` | Event properties associated with the event. Could be added by the api or heap analytics |
| `Url ` | Name of url that was viewed









