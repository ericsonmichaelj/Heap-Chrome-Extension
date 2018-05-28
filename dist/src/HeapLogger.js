let count = 0
const HeapLogger = class {
  constructor(url) {
    this.queryString = url ? queryString.parselUrl(url).query : null;
    this.identity = this.queryString ? this.queryString.i : null;
    this.userProperties = null;
    this.events = null;

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

  _isCustomEvent(event) {
    return event !== 'click' && event !== 'submit' && event !== 'change';
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
      if(this._isEvent(queryStringKey) && this._isCustomEvent(this.queryString[queryStringKey])) {
        const eventId = this._getEventId(queryStringKey);
        events[eventId] = {name: this.queryString[queryStringKey], properties: {}};
      }
    }
    this.events = events.length>0 ? events : null;
  }

  setEventsProperties() {
     for (let queryStringKey in this.queryString) {
      if(this._isEventProperty(queryStringKey)) {
        const eventId = this._getEventId(queryStringKey);
        const eventProperties = this.queryString[queryStringKey];
        if (Array.isArray(eventProperties)) {
          for (let i =0;i < eventProperties.length;i+=2) {
            const key = eventProperties[i];
            const value = eventProperties[i+1];
            if(his.events[eventId]) {
              this.events[eventId].properties[key] = value;
            }
          }
        }
      }
    }    
  }

  static init(url) {
    count++
    const heapLogger = new HeapLogger(url);
    heapLogger.setUserProperties();
    heapLogger.setEvents()
    heapLogger.setEventsProperties();
    // TO DO: Console.log Event and Event Properties. Event Properties are kX.
    // Events are tX (avoid click and change events) 
    heapLogger.print();
    return heapLogger;
  }
  _printEvents() {
    console.group('Event');
    if(this.events) {
      for(const event of this.events) {
        if(event) {
          if(event.name) console.log('name:', event.name);
          if(Object.keys(event.properties).length > 0)  {
            console.log('properties:')
            console.table(event.properties);
          }
        }
      }
    }
    console.groupEnd();
  }
  _printUserInfo() {
    console.group('User Info');
      console.log('identity:', this.identity);
      if(this.userProperties) {
        console.log('User Properties:');
        console.table(this.userProperties);
      }
    console.groupEnd();    
  }
  print() {
    console.group('Heap Analytics Log ' + count);
      this._printUserInfo();
      this._printEvents();
    console.groupEnd();
  }
}