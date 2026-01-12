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
  test('should correctly divide two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('should correctly divide two negative numbers', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('should correctly divide negative by positive', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test('should correctly divide positive by negative', () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test('should return a number', () => {
    expect(typeof divide(10, 2)).toBe('number');
  });

  test('should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });

  test('should handle decimal results', () => {
    expect(divide(10, 3)).toBeCloseTo(3.333, 3);
  });
});
