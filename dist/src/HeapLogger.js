let count = 0;

const HeapLogger = class {
  constructor(url) {
    this.queryString = url ? queryString.parselUrl(url).query : null;
    this.user = User.createUser(this.queryString);
    this.events = Event.createEvents(this.queryString);
    if(ViewEvent.isViewEvent(this.queryString)) this.events.push(new ViewEvent(this.queryString))
  }

  run() {
    if(elv.populated(this.events) || elv.populated(this.user.properties)) {
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
            this.user.display()
            event.display()
          console.groupEnd();
        }
      }
    }
  }

  _printUserProperties() {
    if(elv.populated(this.user.properties)) {
      count++;
      console.group('Heap Analytics: User Properties added (Log #' + count + ')');
        this.user.display();
      console.groupEnd();  
    }
  }

  print() {
    this._printUserProperties();
    this._printEvents();
  }
}