const { helloWorld, divide } = require('./index');

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

describe('divide', () => {
  test('should divide two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('should divide two negative numbers', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('should handle division with negative result', () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test('should handle division resulting in decimal', () => {
    expect(divide(5, 2)).toBe(2.5);
  });

  test('should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });
});
