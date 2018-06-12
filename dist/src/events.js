function convertArrayToObject(array) {
    const object = {}
    if(Array.isArray(array)) {
        for (let i = 0; i < array.length;i+=2) {
            object[array[i]] = array[i+1]
        }
    }
    return object
}

class SelectorProperties {
    constructor(queryString, eventId) {
        this.innerText = queryString[`x${eventId}`]
        this.selectors = SelectorProperties.getSelectors(queryString, eventId)
    }
    static getSelectors(queryString, eventId) {
        return queryString[`y${eventId}`] ? queryString[`y${eventId}`]: queryString[`n${eventId}`]
    }
    static hasSelectors(queryString, eventId) {
        return !!queryString[`n${eventId}`]
    }
    static hasInnerText(queryString) {
        return !!queryString[`x${eventId}`]
    }
    display() {
        console.log(`DOM Hierachy: ${this.selectors.split('|').join('\n')}`)
        if(this.innerText) console.log(`Target Text: ${this.innerText}`)
    }

}

class Event {
    constructor(queryString, eventId) {
        if(queryString && elv(eventId)) {
            this.name = queryString[`t${eventId}`]
            this.properties = convertArrayToObject(queryString[`k${eventId}`])
            if(SelectorProperties.hasSelectors(queryString, eventId)) {
                this.selectorProperties = new SelectorProperties(queryString, eventId)
            }
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
            if(elv.populated(this.selectorProperties)) {
                this.selectorProperties.display()
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