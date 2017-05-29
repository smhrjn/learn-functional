'use strict';
// Functional programming book: https://github.com/MostlyAdequate/mostly-adequate-guide

/*
// Example: mutation - bad effects
	let Flock = function(n) {
	this.seagulls = n;
	};

	Flock.prototype.conjoin = function(other) {
	this.seagulls += other.seagulls;
	return this;
	};

	Flock.prototype.breed = function(other) {
	this.seagulls = this.seagulls * other.seagulls;
	return this;
	};

	let flock_a = new Flock(4);
	let flock_b = new Flock(2);
	let flock_c = new Flock(0);

	let result = flock_a.conjoin(flock_c).breed(flock_b).conjoin(flock_a.breed(flock_b)).seagulls;

	console.log('result: ' + result);
*/


const add = (x, y) =>	x + y;

const multiply = (x, y) => x * y;

let flock_a = 4;
let flock_b = 2;
let flock_c = 0;

let result = add(
  multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b)
);

console.log(result);
