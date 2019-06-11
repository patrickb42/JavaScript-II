// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const fn1 = function (foo) {
    const bar = 5;

    return function (baz) {
        return bar;
    };
}
const thing1 = fn1();
console.log(thing1());


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
    let _counter = 0;

    return function () {
        _counter += 1;
        return _counter;
    };
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let _counter = 0;

    const increment = function () {
        _counter += 1;
        return _counter;
    }
    const decrement = function () {
        _counter -= 1;
        return _counter;
    }
};
