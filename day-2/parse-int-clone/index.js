const charMap = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
}

function myParseInt(str, number=10) {
    if (!/^[+\-]?[\dA-F]+/g.test(str)) {
        return NaN
    }
    let multiplier = 1
    if (['-', '+'].includes(str[0])) {
        if (str[0] === '-') {
            multiplier = -1;
        }
        str = str.slice(1)
    }
    str = str.replace(/[^\dA-F]/g, '')
    return str.split('').reverse().reduce((acc, char, index) => acc + (charMap[char] ? charMap[char] : 0) * Math.pow(number, index), 0) * multiplier;
}

console.log(myParseInt('10'));      // 10
console.log(myParseInt('-10', 2));  // -2
console.log(myParseInt('FFPPP', 16)); // 255
console.log(myParseInt('--20'));    // NaN