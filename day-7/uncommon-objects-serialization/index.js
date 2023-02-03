function serialize(val) {
    const toJSON = Date.prototype.toJSON;
    delete Date.prototype.toJSON;

    try {
        return JSON.stringify(val, (key, value) => {
            if (value instanceof Date) {
                return `[[DATA]]:Date;${value.valueOf()}`;
            }
            if (value instanceof Set || value instanceof Map) {
                return `[[DATA]]:${value.constructor.name};${serialize([...value])}`;
            }
            return value;
        })
    } finally {
        Object.defineProperty(Date.prototype, 'toJSON', {
            enumerable: false,
            writable: true,
            configurable: true,
        })
    }
}

function parse(str) {
    return JSON.parse(str, (key, value) => {
        if (typeof value === 'string' && value.startsWith('[[DATA]]')) {
            const [_, type, data] = /^\[\[DATA]]:(.*?);(.*)/.exec(value);
            return Function('data', `return new ${type}(data);`)(parse(data));
        }
        return value;
    })
}

const original = {
    myDate: new Date(),
    mySet: new Set([1, 2, 3]),
    myMap: new Map([
        [new Date(), {a: 1}]
    ]),
    myFunc: () => {
        return 'test';
    }
};

const str = serialize(original);

// Объект должен иметь аналогичную структуру с original

console.log(parse(str))
