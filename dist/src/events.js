function convertArrayToObject(array) {
    const object = {}
    if(Array.isArray(array)) {
        for (let i = 0; i < array.length;i+=2) {
            object[array[i]] = array[i+1]
        }
    }
    return object
}

class Event {
    constructor(queryString, eventId) {
        if(queryString && elv(eventId)) {
            this.name = queryString[`t${eventId}`]
            this.properties = convertArrayToObject(queryString[`k${eventId}`])
            this.headerName = 'Event'
        }
    }

    display(callback) {
        console.group('Event');
            if(this.name) console.log('name:', this.name);
            if(elv.populated(this.properties))  {
            console.group('properties:');
            for (let property in this.properties) {
                const value = this.properties[property];
                console.log(property + ': ' + value);
            }
            console.groupEnd();
            }
            if(callback) callback()
        console.groupEnd();
    }
    static isEvent(queryString, id) {
        const event = queryString[`t${id}`]
        return elv(event)
      }
}

class ViewEvent extends Event {
    constructor(queryString) {
        super()
        this.name = 'view'
        this.properties = convertArrayToObject(queryString.k)
        this.headerName = 'View Event'
        this.url = ViewEvent.getUrl(queryString)
    }
    display() {
        super.display(this.displayViewProperties.bind(this))
    }
    displayViewProperties() {
        console.log(`url: ${this.url}`)
    }
    static isViewEvent(queryString) {
        if (queryString && typeof queryString === 'object') {
            return !!queryString.h && !!queryString.d
        }
        
    }
    static getUrl(queryString) {
        let url = `${queryString.d}${queryString.h}`
        if (queryString.q) {
            url+= `?${queryString.q}`
        }
        if(queryString.g) {
            url+= `#${queryString.g}`  
        }
        return url
    }
}