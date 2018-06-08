class Event {
    constructor(initialObject) {
        this.name = initialObject.name
        this.properties = initialObject.properties
        this.headerName = 'Event'
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
}

class ViewEvent extends Event {
    constructor(queryString) {
        const eventObject = {name: 'view'}
        eventObject.properties = ViewEvent.getProperties(queryString.k)
        super(eventObject)
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

    static getProperties(events) {
        const properties = {}
        if(Array.isArray(events)) {
            for (let i = 0; i < events.length;i+=2) {
                properties[events[i]] = events[i+1]
            }
        }
        return properties
    }
}