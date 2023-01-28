## Реализация Partial классов

Необходимо написать функцию, которая бы позволяла расширять заданный класс новыми методами. В добавляемых методах должен корректно работать super.

```js
class Parent {
  foo() {
    console.log('It works!');
  }
}

class Example extends Parent {}

partial(Example, {
  foo() {
    super.foo();
    console.log('Yeaaah');
  },
  
  get bar() {
    return Math.random();
  }
});

const example = new Example();

example.foo(); // It works! Yeaaah

console.log(example.bar); // Случайное число
console.log(example.bar); // Случайное число
console.log(example.bar); // Случайное число
```