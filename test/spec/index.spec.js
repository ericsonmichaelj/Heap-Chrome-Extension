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
     console.log(heapLogger.userProperties)
     expect(Object.keys(heapLogger.userProperties).length).to.equal(2)
     expect(heapLogger.userProperties.test).to.equal('testA');
     expect(heapLogger.userProperties.a).to.equal('b');
  });
});
