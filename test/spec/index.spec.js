describe('Heap', () => {
  it('should load heap', () => {
    expect(window.heap.track).to.be.a('function');
  })
})
describe('Heap Logger', () => {
  it('should be an object', () => {
    const heapLogger = HeapLogger.init();
    expect(heapLogger).to.be.a('object');
  })
  it('should have property queryString', () => {
    const heapLogger = HeapLogger.init('https://example.com?s=test');
    expect(heapLogger.queryString.s).to.equal('test');
  })
  it('should have an identity property from query string', () => {
    const heapLogger = HeapLogger.init('https://example.com?i=test');
    expect(heapLogger.identity).to.equal('test');
  })
  it('should contain the user properties', () => {
    const heapLogger = HeapLogger.init('https://example.com?_test=testA&_a=b');
    expect(Object.keys(heapLogger.userProperties).length).to.equal(2)
    expect(heapLogger.userProperties.test).to.equal('testA');
    expect(heapLogger.userProperties.a).to.equal('b');
  });
  it('should set event name  from query string', () => {
    const heapLogger = HeapLogger.init('https://example.com?t0=test&t1=click&t2=foo');
    expect(heapLogger.events[0].name).to.equal('test');
    expect(heapLogger.events[1].name).to.equal('click');
    expect(heapLogger.events[2].name).to.equal('foo');
  });
  it('should not set events if query string does not contain event property', () => {
    const heapLogger = HeapLogger.init('https://example.com?tl=test');
    expect(heapLogger.events).to.equal(null);    
  });
  it('should have an events properties', () => {
    const heapLogger = HeapLogger.init('https://example.com?t0=test&k0=foo&k0=bar&k0=hello&k0=world');
    expect(heapLogger.events[0].properties.foo).to.equal('bar');
    expect(heapLogger.events[0].properties.hello).to.equal('world');       
  })
});
