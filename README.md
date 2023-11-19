# unit-testing-1__cleaning-function

[![Build status](https://ci.appveyor.com/api/projects/status/5hnip0khbtrnnura?svg=true)](https://ci.appveyor.com/project/KoensBerg/unit-testing-2-matchers)

## Настроим автотесты

1. (из предыдущего задания) Функция принимает на вход объект вида:
```javascript
{name: 'Маг', health: 90}
```
И возвращает ответ в виде одной из строк: `healthy`, `wounded`, `critical`

2. Функция принимает объект вида
```javascript
[
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]
```
И возвращает отсортированный по уровню здоровья массив:
```javascript
[
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
]
```

Исходное ДЗ [здесь](https://github.com/KoensBerg/ajs-homeworks/tree/ajs8/test-ci)
