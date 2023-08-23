const capitalizeFirstLetter = require('./capitalize');

test('Capitalize the first letter in a string', () => {
  expect(capitalizeFirstLetter('happy')).toBe('H');
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
