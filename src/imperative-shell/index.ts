import { increment } from "../functional-core/functions";

const counterObj = Object.freeze({ value: 1 });

const counter: number = 1;
const counter2: number = increment(counter);

console.assert(counter === 1);
console.assert(increment(counter) === 2);

console.log(counter2);