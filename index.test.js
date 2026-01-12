const { helloWorld, multiply } = require('./index');

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

describe('multiply', () => {
  test('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  test('should multiply a positive and negative number', () => {
    expect(multiply(2, -3)).toBe(-6);
  });

  test('should return 0 when multiplying by 0', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});
