// function isPalindrome(str) {
//     return !!(str.length - 1) && str === [...str].reverse().join('');
// }

function isPalindrome(str) {
    if (str.length < 2) {
        return false;
    }
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[(str.length - 1) - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('bob'));  // true
console.log(isPalindrome('abba')); // true
console.log(isPalindrome('a'));    // false
console.log(isPalindrome('azt'));  // false
