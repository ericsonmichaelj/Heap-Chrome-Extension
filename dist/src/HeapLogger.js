let count = 0;
const HeapLogger = class {
  constructor(url) {
    this.queryString = url ? queryString.parselUrl(url).query : null;
    this.identity = this.queryString ? this.queryString.i : null;
    this.userProperties = null;
    this.events = [];

  }
  setUserProperties() {
    if(!this.queryString) return;
    const userProperties = {}
    for (let queryStringKey in this.queryString) {
      if(queryStringKey[0] === '_') {
        userProperties[queryStringKey.substr(1)] = this.queryString[queryStringKey];
      }
    }
    this.userProperties = Object.keys(userProperties).length > 0 ? userProperties: null;
  }

  _isEvent(queryStringKey) {
    return queryStringKey[0] === 't' && !isNaN(parseInt(queryStringKey.substr(1)));
  }

  _isEventProperty(queryStringKey) {
    return queryStringKey[0] === 'k' && !isNaN(parseInt(queryStringKey.substr(1)));
  }

  _getEventId(queryStringKey) {
    return parseInt(queryStringKey.substr(1))
  }

  setEvents() {
    if(!this.queryString) return;
     const events = [];
     for (let queryStringKey in this.queryString) {
      if(this._isEvent(queryStringKey)) {
        const eventId = this._getEventId(queryStringKey);
        events[eventId] = new Event({name: this.queryString[queryStringKey], properties: {}});
      }
    }
    this.events = events;
  }

  setViewEvent() {
    const queryString = this.queryString
    if(ViewEvent.isViewEvent(queryString)) this.events.push(new ViewEvent(queryString))
  }

_setEventProperties(queryStringKey) {
    if(this._isEventProperty(queryStringKey)) {
      const eventId = this._getEventId(queryStringKey);
      const eventProperties = this.queryString[queryStringKey];
      if (Array.isArray(eventProperties)) {
        for (let i =0;i < eventProperties.length;i+=2) {
          const key = eventProperties[i];
          const value = eventProperties[i+1];
          if(this.events[eventId]) {
            this.events[eventId].properties[key] = value;
          }
        }
      }
    }
  }

  setEventsProperties() {
     for (let queryStringKey in this.queryString) {
       this._setEventProperties(queryStringKey)
    }    
  }

  run() {
    this.setUserProperties();
    this.setEvents();
    this.setEventsProperties();
    this.setViewEvent();
    if(elv.populated(this.events) || elv.populated(this.userProperties)) {
      this.print();
    }
    return this;
  }

  _printEvents() {
    if(elv.populated(this.events)) {
      for(const event of this.events) {
        if(elv.populated(event)) {
          count++;
          console.group(`Heap Analytics: ${event.headerName} Fired (Log #${count})`);
            this._printUserInfo();
            event.display()
          console.groupEnd();
        }
      }
    }
  }

  _printUserInfo() {
    console.group('User Info');
      console.log('identity:', this.identity);
      if(elv.populated(this.userProperties)) {
        console.group('User Properties:');
        for (let property in this.userProperties) {
          const value = this.userProperties[property];
          console.log(property + ': '  + value);
        }
        console.groupEnd();
      }
    console.groupEnd();
  }

  _printUserProperties() {
    if(elv.populated(this.userProperties)) {
      count++;
      console.group('Heap Analytics: User Properties added (Log #' + count + ')');
      this._printUserInfo();
      console.groupEnd();  
    }
  }

  print() {
    this._printUserProperties();
    this._printEvents();
  }
}