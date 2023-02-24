function maxUniqueSubstr(str) {
    let maxSubstr = '',
        currentSubstr = 0,
        cache = new Set();

    for (let char of str) {
        if (cache.has(char)) {
            currentSubstr = 1;
            cache.clear();
            cache.add(char);
        } else {
            cache.add(char);
            currentSubstr++;
            if (currentSubstr > maxSubstr.length) {
                maxSubstr = [...cache].join('');
            }
        }
    }

    return maxSubstr;
}

console.log(maxUniqueSubstr('aab'));      // ab
console.log(maxUniqueSubstr('abcabcbb')); // abc
console.log(maxUniqueSubstr('bbbbb'));    // b
console.log(maxUniqueSubstr('pwwkew'));   // wke
