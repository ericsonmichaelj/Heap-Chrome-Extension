let count = 0
const HeapLogger = class {
  constructor(url) {
    this.queryString = url ? queryString.parselUrl(url).query : null;
    this.identity = this.queryString ? this.queryString.i : null;
  }
  setUserProperties() {
    if(!this.queryString) return;
    const userProperties = {}
    for (let queryStringKey in this.queryString) {
      if(queryStringKey[0] === '_') {
        userProperties[queryStringKey.substr(1)] = this.queryString[queryStringKey]
      }
    }
    if (Object.keys(userProperties).length > 0) this.userProperties = userProperties
  }
  static init(url) {
    count++
    const heapLogger = new HeapLogger(url)
    heapLogger.setUserProperties()
    heapLogger.print()
    return heapLogger
  }
  print() {
    console.group('Heap Analytics Log ' + count);
      console.group('User Info');
        console.log('identity:', this.identity);
        if(this.userProperties) {
          console.log('User Properties:')
          console.table(this.userProperties)
        }
      console.groupEnd();
      console.group('Event');
      console.groupEnd();
    console.groupEnd();
  }
}