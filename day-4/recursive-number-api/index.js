class MyNumber {
    constructor(number) {
        this.number = number;
    }

    add(number) {
        this.number += number;
        return this;
    }

    mult(number) {
        this.number *= number;
        return this;
    }

    sub(number) {
        this.number -= number;
        return this;
    }

    valueOf() {
        return this.number
    }
}

const num = new MyNumber(10);

console.log(num.add(2).mult(2).sub(1) - 5); // 18