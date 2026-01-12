const { helloWorld, divide, multiply } = require('./index');

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

describe('multiply', () => {
  test('should correctly multiply two positive numbers', () => {
    expect(multiply(5, 3)).toBe(15);
  });

  test('should correctly multiply two negative numbers', () => {
    expect(multiply(-5, -3)).toBe(15);
  });

  test('should correctly multiply negative by positive', () => {
    expect(multiply(-5, 3)).toBe(-15);
  });

  test('should correctly multiply positive by negative', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('should return a number', () => {
    expect(typeof multiply(5, 3)).toBe('number');
  });

  test('should handle multiplication by zero', () => {
    expect(multiply(10, 0)).toBe(0);
    expect(multiply(0, 10)).toBe(0);
  });

  test('should handle decimal multiplication', () => {
    expect(multiply(2.5, 4)).toBe(10);
  });
});
