
function format(str, dict) {
    return str.replace(/\${(.*?)}/g, (_, expr) => {
        return Function(...Object.keys(dict), `return ${expr}`)(...Object.values(dict))
    })
}

console.log(format('Hello ${name}! My age is ${2 * age}. ${name + age}', {name: 'Bob', age: 12})) // 'Hello Bob! My age is 24. Bob12'