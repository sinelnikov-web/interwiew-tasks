## Написать функцию debounce

Необходимо написать функцию, которая бы принимала другую функцию и возвращала её debounce версию.

```js
function laugh() {
  console.log('Ha-ha!')
}

const debouncedLaugh = debounce(laugh, 300);

debouncedLaugh();
debouncedLaugh();
debouncedLaugh();
debouncedLaugh();
debouncedLaugh();
```