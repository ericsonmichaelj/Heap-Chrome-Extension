describe('Heap', () => {
  it('should load heap', () => {
    expect(window.heap.track).to.be.a('function');
  })
})
describe('Heap Logger', () => {
  const setup = function(url) {
     const heapLogger = new HeapLogger(url);
     heapLogger.run();
     return heapLogger;
  }
  it('should be an object', () => {
    const heapLogger = setup()
    expect(heapLogger).to.be.a('object');
  })
  it('should have property queryString', () => {
    const heapLogger = setup('https://example.com?s=test');
    expect(heapLogger.queryString.s).to.equal('test');
  })
  describe('user', () => {
     it('should have an identity property from query string', () => {
      const heapLogger = setup('https://example.com?i=test');
      expect(heapLogger.identity).to.equal('test');
    })
    it('should contain the user properties', () => {
      const heapLogger = setup('https://example.com?_test=testA&_a=b');
      expect(Object.keys(heapLogger.userProperties).length).to.equal(2)
      expect(heapLogger.userProperties.test).to.equal('testA');
      expect(heapLogger.userProperties.a).to.equal('b');
    });
  });
  describe('events', () => {
    it('should set event name  from query string', () => {
      const heapLogger = setup('https://example.com?t0=test&t1=click&t2=foo');
      expect(heapLogger.events[0].name).to.equal('test');
      expect(heapLogger.events[1].name).to.equal('click');
      expect(heapLogger.events[2].name).to.equal('foo');
    });
    it('should not set events if query string does not contain event property', () => {
      const heapLogger = setup('https://example.com?tl=test');
      expect(heapLogger.events.length).to.equal(0);    
    });
    it('should have an events properties', () => {
      const heapLogger = setup('https://example.com?t0=test&k0=foo&k0=bar&k0=hello&k0=world');
      expect(heapLogger.events[0].properties.foo).to.equal('bar');
      expect(heapLogger.events[0].properties.hello).to.equal('world');       
    }); 
  })
  describe('view events', () => {
    it('should set events if query string contains a view event', () => {
      const heapLogger = setup('https://example.com?h=%2F&d=localhost');
      expect(heapLogger.events.length).to.equal(1)
      expect(heapLogger.events[0].url).to.equal('localhost/')
      expect(heapLogger.events[0].name).to.equal('view')
    })
    it('should set event properties if they exist', () => {
      const heapLogger = setup('https://example.com?h=%2F&d=localhost&k=foo&k=bar');
      expect(heapLogger.events.length).to.equal(1)
      expect(heapLogger.events[0].url).to.equal('localhost/')
      expect(heapLogger.events[0].properties.foo).to.equal('bar')     
    })
    it('should set the query string if it exists', () => {
      const heapLogger = setup('https://example.com?h=%2F&d=localhost&q=test');
      expect(heapLogger.events.length).to.equal(1)
      expect(heapLogger.events[0].url).to.equal('localhost/?test')    
    })
    it('should set the hash if it exists', () => {
      const heapLogger = setup('https://example.com?h=%2F&d=localhost&g=test');
      expect(heapLogger.events.length).to.equal(1)
      expect(heapLogger.events[0].url).to.equal('localhost/#test')    
    })
  })

  describe('print', () => {
    it('should not log if there are no events or user properties', () => {
      const heapLogger = new HeapLogger('https://example.com?tl=test&i=foo');
      const spy = sinon.spy(heapLogger,'print');
      heapLogger.run();
      expect(spy.called).to.equal(false);
    });
    it('should log if there is an event', () => {
      const heapLogger = new HeapLogger('https://example.com?t0=test');
      const spy = sinon.spy(heapLogger,'print');
      heapLogger.run();
      expect(spy.called).to.equal(true);
    });
    it('should log if there are user properties', () => {
      const heapLogger = new HeapLogger('https://example.com?i=test&_test=testA&_a=b');
      const spy = sinon.spy(heapLogger,'print');
      heapLogger.run();
      expect(spy.called).to.equal(true);      
    });
  });
});
