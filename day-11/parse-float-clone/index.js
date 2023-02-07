function myParseFloat(str) {
    let state = null;

    const chunks = [];

    let sign = 1;
    let expSign = 1;

    parsing: for (let char of str) {
        switch (char) {
            case '-': {
                if (state == null) {
                    state = 'int';
                    sign = -1;
                    continue;
                }
                if (state === 'exp') {
                    state = 'expValue';
                    expSign = -1;
                    continue;
                }
                break parsing;
            }
            case 'E':
            case 'e': {
                if (state === 'int' || state === 'dec') {
                    state = 'exp';
                    continue;
                }
                break parsing;
            }
            case '.': {
                if (state === 'int' || state === null) {
                    state = 'dec';
                    continue;
                }
                break parsing;
            }
            default: {
                if (/\D/g.test(char)) {
                    break parsing;
                }
                switch (state) {
                    case null:
                    case 'int': {
                        state = 'int';
                        if (chunks.length === 0) {
                            chunks.push('');
                        }
                        chunks[0] += char;
                        break;
                    }
                    case 'dec': {
                        while (chunks.length < 2) {
                            chunks.push('');
                        }
                        chunks[1] += char;
                        break;
                    }
                    case 'exp':
                    case 'expValue': {
                        state = 'expValue';
                        while (chunks.length < 3) {
                            chunks.push('');
                        }
                        chunks[2] += char;
                        break;
                    }
                }
            }
        }
    }
    if (chunks.length === 0) {
        return NaN;
    }

    return sign * chunks.reduce((res, el, i) => {
        const num = parseFloat(el) || 0;
        switch (i) {
            case 0: {
                return res + num;
            }
            case 1: {
                return res + num * (10 ** -el.length);
            }
            case 2: {
                return res * 10 ** (num * expSign);
            }
        }
    }, 0)
}

console.log(myParseFloat('10'));      // 10
console.log(myParseFloat('-10.2'));   // -10.2
console.log(myParseFloat('6e-2'));    // 0.06
console.log(myParseFloat('12.0006')) // 12.0006
console.log(myParseFloat('--20'));    // NaN
