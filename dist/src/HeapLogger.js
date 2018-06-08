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

  setEvents() {
    if(!this.queryString) return;
      let eventId = 0;
      while(true) {
        if(!Event.isEvent(this.queryString, eventId)) return 
        this.events[eventId] = new Event(this.queryString, eventId);
        eventId++;
      }
  }

  setViewEvent() {
    const queryString = this.queryString
    if(ViewEvent.isViewEvent(queryString)) this.events.push(new ViewEvent(queryString))
  }

  _hasKeyDownEventProperties(eventId) {
    return !this.queryString.y[eventId] || !this.queryString[eventId]
  }

  //y[i= selector (optional)
  //n[i] = first
  //x[i] = text (optional)
  setKeyDownEventProperties() {
    if(this._hasKeyDownEventProperties()) {

    }
  }

  run() {
    this.setUserProperties();
    this.setEvents();
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