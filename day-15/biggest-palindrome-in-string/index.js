function findPalindromicSubstring(str) {
    let chars = [...str];
    let max = [];
    for (let i = 0; i < chars.length; i++) {
        for (let j = chars.length - 1; j > i; j--) {
            let current = chars.slice(i, j + 1);
            if (isPalindrome(current) && current.length > max.length) {
                max = current;
            }
        }
    }

    return max.join('') || null;

    function isPalindrome(str) {
        if (str.length === 1) {
            return false;
        }
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

console.log(findPalindromicSubstring('adaabbabla')); // 'abba'
console.log(findPalindromicSubstring('blablur'));    // null
