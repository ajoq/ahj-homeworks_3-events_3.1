import getRandom from '../getRandom';

test('random', () => {
  const expected = 'Привет!';
  const received = hello('Привет!');
  expect(received).toBe(expected);
});
