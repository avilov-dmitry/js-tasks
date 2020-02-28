// https://learn.javascript.ru/promise#promise-all-iterable
// Функция которая восзравщает промис, который ждет выполнения всех запросов и возвращает массив результатов

const a = new Promise((resolve) => setTimeout(() => resolve(1),3000));
const b = new Promise((resolve) => setTimeout(() => resolve(2),2000));
const c = new Promise((resolve) => setTimeout(() => resolve(3),1000));

const promiseAll = (arr) => {
    const result = [];

    return new Promise(resolve => {
        return arr.forEach(promise => {
            promise.then(item => {
                result.push(item);
                if(arr.length === result.length) {
                    resolve(result);
                }
            })
        });
    })
};

promiseAll([a, b, c]).then(result => console.log(result));

