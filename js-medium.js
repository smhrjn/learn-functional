'use strict';

// https://medium.com/javascript-scene/the-rise-and-fall-and-rise-of-functional-programming-composable-software-c2d91b424c8c

const compose2 = f => g => x => f(g(x));
const double = n => n * 2;
const inc = n => n +1;

console.log(compose2(double)(inc)(12));

// Tiny, recursive autocurry
const curry = (
  f, arr = []
) => (...args) => (
  a => a.length === f.length ?
    f(...a) :
    curry(f, a)
)([...arr, ...args]);

const arr = [1, 2, 3];
console.log(arr.map(double).map(double));

const map = (fn, arr) => arr.reduce((acc, item, index, arr) => {
  return acc.concat(fn(item, index, arr));
}, []);

const filter = (fn, arr) => arr.reduce((newArr, item) => {
  return fn(item) ? newArr.concat([item]) : newArr;
}, []);

const compose = (...fns) => x => fns.reduce((v, f) => f(v), x);

const incAndDouble = compose(inc, double);

console.log('inc and Double: ' + incAndDouble(2));
