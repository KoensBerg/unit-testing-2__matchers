import healthLevel, { sortUsersByHealth } from '../userHealth';

// - - - - - - - - - - - - - - - - - - - - - - - - -
// Тест проверяет статус игрока по уровню здоровья
// - - - - - - - - - - - - - - - - - - - - - - - - -
test.each([
  [{ name: '...', health: 51 }, 'healthy'],
  [{ name: '...', health: 50 }, 'wounded'],
  [{ name: '...', health: 15 }, 'wounded'],
  [{ name: '...', health: 14 }, 'critical'],
])(
  'should return health level for some user with his health',
  (data, expected) => {
    const result = healthLevel(data);
    expect(result).toBe(expected);
  },
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Тест проверяет сортировку игроков по значению здоровья
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('should sort users by health level', () => {
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const received = sortUsersByHealth(data);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(received).toEqual(expected);
});
