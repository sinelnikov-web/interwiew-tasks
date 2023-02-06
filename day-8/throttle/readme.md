## Написать функцию throttle

Необходимо написать функцию, которая бы принимала другую функцию и возвращала её throttle версию.

```js
function laugh() {
  console.log('Ha-ha!')
}

const throttledLaugh = throttle(laugh, 300);

throttledLaugh();
throttledLaugh();
throttledLaugh();
throttledLaugh();
throttledLaugh();
```