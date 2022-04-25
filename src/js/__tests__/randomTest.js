import getRandom from '../random';

expect.extend({
    toBeWithinRange(received, floor, ceiling) {
      const pass = received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false,
        };
      }
    },
  });
  
  test('randome number', () => {
    expect(getRandom(16, 5)).toBeWithinRange(1, 16);
    expect(getRandom(16, 5)).not.toBeWithinRange(5, 5);
  });
  