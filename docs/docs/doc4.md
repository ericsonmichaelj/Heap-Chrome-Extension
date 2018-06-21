---
id: doc4
title: Versions
---

Version 1.0.0
------
Every request to heap analytics is logged. Information that displays if avaible are userId, user properties, event name and event properties. Information about userProperties and eventProperties are in a table format.

Version 1.0.1
------
Fix bug where logging would occur with no useful information. Now will only show logs for heap events with events or user properties.

Version 1.1.0
------
Instead of logging everytime a heap analytics request is made, logs everytime either an event is fired or user Properties have been added. Title of log is now either "Heap Analytics: User Properties added (Log #X)" or "Heap Analytics: Event Fired (Log #X)"

No longer logging user and event properties using table format since it does not show up when the console is closed.

Version 1.1.1
------
Now logs View Events. Logs about Event now include event properties about selector and target text.

Version 1.1.2
------
Fix bug in which `?` and `#` were counted twice. Also fixed bug where target text was unnecessarily added