// https://learn.javascript.ru/promise#promise-race-iterable

const a = new Promise((resolve) => setTimeout(() => resolve(1),3000));
const b = new Promise((resolve) => setTimeout(() => resolve(2),2000));
const c = new Promise((resolve) => setTimeout(() => resolve(3),1000));

const promiseRace = (arr) =>
    new Promise(resolve => arr.forEach(promise => promise.then(item => resolve(item))));

promiseRace([a, b, c]).then(result => console.log(result));

