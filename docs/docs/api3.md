---
id: api3
title: User Properties Added
---

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
|:---------------------:|-------------|
| `User Info - identity` | identity of the user as it appers in heap analytics. If undefined, will appear as random identity in heap | 
| `User Info - User Properties`     | User properties associated with user. Could be added by the api or heap analytics. These properties will live with the user throughout its journey. Is not an exhaustive list of all user properties, just the one's added |