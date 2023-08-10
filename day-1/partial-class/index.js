function partial(cls, obj) {
    Object.setPrototypeOf(obj, cls.prototype.__proto__)
    Object.defineProperties(cls.prototype, Object.getOwnPropertyDescriptors(obj))
}

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


//
example.foo(); // It works! Yeaaah
//
console.log(example.bar); // Случайное число
console.log(example.bar); // Случайное число
console.log(example.bar); // Случайное число

