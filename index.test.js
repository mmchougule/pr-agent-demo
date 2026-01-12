const { helloWorld } = require('./index');

describe('helloWorld', () => {
  test('should return "Hello, World!"', () => {
    expect(helloWorld()).toBe("Hello, World!");
  });

  test('should return a string', () => {
    expect(typeof helloWorld()).toBe('string');
  });

  test('should not return an empty string', () => {
    expect(helloWorld().length).toBeGreaterThan(0);
  });
});
