const a = {
    foo1: () => console.log(this),
    foo2: function(){ console.log(this) }
};

a.foo1(); // При запускае в браузере будет Window
a.foo2();

function roo() {
    this.log = () => console.log(this);
    const a = {
        foo1: () => console.log(this),
        foo2: function(){ console.log(this) }
    };
    return {a}
}
roo().a.foo1(); // контекст roo
roo().a.foo2();