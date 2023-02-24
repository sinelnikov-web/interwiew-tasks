function includes(str, substr) {
    let i = 0,
        currentSubstrLength = 0;

    while (i + substr.length - currentSubstrLength <= str.length) {
        if (str[i] === substr[currentSubstrLength]) {
            currentSubstrLength++;
        } else {
            currentSubstrLength = 0;
        }
        if (currentSubstrLength === substr.length) {
            return true;
        }
        i++;
    }

    return false;
}

console.log(includes('hello bob!', 'bob'));  // true
console.log(includes('abba', 'aba'));        // false
