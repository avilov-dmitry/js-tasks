// https://learn.javascript.ru/task/sum-many-brackets

function sum(a) {
    let result = a;

    const callBack = function(b) {
        result += b
        return callBack
    }

    callBack.toString = function() {
        return result
    }

    return callBack
}

console.log(`sum(1) - ${ sum(1)}`);
console.log(`sum(1)(2) - ${ sum(1)(2)}`);
console.log(`sum(1)(2)(3) - ${ sum(1)(2)(3)}`);
console.log(`sum(1)(2)(3)(4) - ${ sum(1)(2)(3)(4)}`);
console.log(`sum(1)(2)(3)(4)(5) - ${ sum(1)(2)(3)(4)(5)}`);
console.log(`sum(1)(2)(3)(4)(5)(10) - ${ sum(1)(2)(3)(4)(5)(10)}`);