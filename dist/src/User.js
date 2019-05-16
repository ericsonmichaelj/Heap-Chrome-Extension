class User {
    constructor(id, properties) {
      this.identity = id;
      this.properties = properties
    }
    static createUser(queryString) {
      const properties = User.createUserProperties(queryString)
      const id = queryString ? queryString.i : null;
      const user = new User(id, properties)
      return user;
    }
    static createUserProperties(queryString) {
      if(!queryString) return;
      const userProperties = {}
      for (let queryStringKey in queryString) {
        if(queryStringKey[0] === '_') {
          userProperties[queryStringKey.substr(1)] = queryString[queryStringKey];
        }
      }
      return Object.keys(userProperties).length > 0 ? userProperties: null;
    }
    display () {
      console.group('User Info');
      console.log('identity:', this.identity);
      if(elv.populated(this.properties)) {
        console.group('User Properties:');
        for (let property in this.properties) {
          const value = this.properties[property];
          console.log(property + ': '  + value);
        }
        console.groupEnd();
      }
    console.groupEnd();
    }
  }