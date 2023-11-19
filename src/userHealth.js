// - - - - - - - - - - - - - - - - - - - - - - - -
// Функция вербального определения уровня здоровья
// - - - - - - - - - - - - - - - - - - - - - - - -
export default function healthLevel(data) {
  if (data.health > 50) {
    return 'healthy';
  }

  if (data.health <= 50 && data.health >= 15) {
    return 'wounded';
  }

  return 'critical';
}

// - - - - - - - - - - - - - - - - - - - - - - - -
// Функция сортировки игроков по здоровью
// - - - - - - - - - - - - - - - - - - - - - - - -
export function sortUsersByHealth(data) {
  return data.sort((a, b) => b.health - a.health);
}
