

let count = 0;

function increment() {
    return ++count;
}

function decrement() {
    return --count;
}

export const counter = {
    increment: increment,
    decrement: decrement
}