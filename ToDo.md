Вопросы к собеседованию:
-

- Общие вопросы:
    - Общение брайзера с сервером
    - Парсинг html / css / js
    - Event loop
    - [CORS](https://grishaev.me/cors/)
    - OPTIONS
    - ООП
    - Сложность алгоритмов
    - TypeScript


- JS:
    - DOM
    - Переменные
    - Hoisting
    - Типы данных: ссылочные и примитивы
    - Как работает приведение типов
    - Почему можно вызывать методы у примитивов
    - Анонимные Функции
    - Functional Declaration
    - Functional Expression
    - [Контекст функции / this](https://habr.com/ru/post/149516/)
    - [Функциональные выражения](https://learn.javascript.ru/function-declaration-expression)
    - [Стрелочные функции](https://learn.javascript.ru/arrow-functions)
    - [Promise](https://learn.javascript.ru/promise)
    - Частые вопросы:
        * Отличие между обычной функцией и стрелочной
        * Чему будет равно: true + false 
        ```js
          const sum = true + false;
          console.log(sum) // ??????????
        ```
        * typeof null
        ```js
            const type = typeof null;
            console.log(type);  // 'object'
        ```
        * вернуть undefined в промисе - будет ли дальше идти цепочка
        ```js
            new Promise().resolve().then(() => 'ok').then(() => undefined).then(() => 'ok')
        ```
    
- React:
    - Virtual DOM
    - Согласование
    - Hoc
    - Hooks
    - Частые вопросы:

Тесты
```js
    console.log('1' == 1)
    console.log(1 == '1')          
```
```js
    console.log(f1)
    console.log(f2)
    console.log(f3)
    function f1(){}
    var f2 = function(){}
    let f3 = function(){}
```
```js
    const a = {
        f1: () => console.log(this),
        f2: function() {
            console.log(this);
        }
    }
    a.f1() // Window
    a.f2() // {f1: ƒ, f2: ƒ}
```

```js
var a = {}
var i = 0;
(function(){
    a.b = "0";
    i++
})();
console.log(a); // {b: "0"}
console.log(i); //1
(function(a, i) {
    a.b = "b";
    i++
})(a, i); // Передали ссылку первым аргументом и примитив вторым
console.log(a); // {b: "b"}
console.log(i); // 1
```

Задачки:
-   Реализовать функцию sum
```js
sum(1)(2) // 3
sum(12)(1)(2) // 15
```
-   Реализовать функцию sum

```js

```