const a = {
    foo1: () => console.log(this),
    foo2: function(){ console.log(this) }
};

a.foo1(); // При запускае в браузере будет Window
a.foo2();


console.log('');
console.log('----');
console.log('');

function roo() {
    const a = {
        foo1: () => console.log(this),
        foo2: function(){ console.log(this) }
    };
    return {a}
}
roo().a.foo1(); // контекст roo
roo().a.foo2();