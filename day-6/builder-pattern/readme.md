## Реализация паттерна "Строитель" для класса

Необходимо реализовать паттерн "Строитель" для заданного класса.

```js
class User {
  constructor(params) {
    this.name = params.name;
    this.age = params.age;
    this.skills = params.skills;
  }
}

User.name('Bob').age(47).skills(['Coding']).create(); // User({name: 'Bob', age: 47, skills: ['Coding']})
```
