# unit-testing-2__matchers

[![Build status](https://ci.appveyor.com/api/projects/status/5hnip0khbtrnnura?svg=true)](https://ci.appveyor.com/project/KoensBerg/unit-testing-2-matchers)

### Настроим автотесты

Добавлена функция, принимающая объект вида
```javascript
[
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]
```
... и возвращающая отсортированный по уровню здоровья массив:
```javascript
[
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
]
```

В автотестах используем `toEqual` вместо `toBe`

Описание ДЗ [здесь](https://github.com/KoensBerg/ajs-homeworks/tree/ajs8/test-ci),
AppVeyor к репозиторию [здесь](https://ci.appveyor.com/project/KoensBerg/unit-testing-2-matchers)
