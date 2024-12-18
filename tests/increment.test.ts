import { expect, test } from 'bun:test';
import {
    add,
    multiply,
    divide,
    subtract,
    unaryAdd,
    unaryMultiply,
    unaryDivide,
    unarySubtract,
    incrementOf10,
    addThenMultiply,
    calculator,
    isOdd,
    isEven,
    square,
    cube
} from '../src/functional-core/functions';

import { isGeometricShape, Rectangle } from '../src/patterns/AlgebricsDataTypes';

/**
 * Tests pour les opérations binaires
 */
test("add should return the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
});

test("multiply should return the product of two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
});

test("divide should return the quotient of two numbers", () => {
    expect(divide(6, 3)).toBe(2);
});

test("subtract should return the difference of two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
});

/**
 * Tests pour les opérations unaires
 */
test("unaryAdd should return a function that adds two numbers", () => {
    expect(unaryAdd(2)(3)).toBe(5);
});

test("unaryMultiply should return a function that multiplies two numbers", () => {
    expect(unaryMultiply(2)(3)).toBe(6);
});

test("unaryDivide should return a function that divides two numbers", () => {
    expect(unaryDivide(6)(3)).toBe(2);
});

test("unarySubtract should return a function that subtracts two numbers", () => {
    expect(unarySubtract(5)(3)).toBe(2);
});

/**
 * Test pour incrementOf10
*/
test("incrementOf10 should return a function that adds 10 to a number", () => {
    expect(incrementOf10(2)).toBe(12);
});

/*
* Test pour addThenMultiply
*/
test("addThenMultiply should return the result of (x + y) * z", () => {
    expect(addThenMultiply(2, 3, 4)).toBe(20);
});

/**
 * Test pour calculator
 */
test("calculator should apply a unary operation to two numbers", () => {
    const calcAdd = calculator(unaryAdd);
    expect(calcAdd(2)(3)).toBe(5);
});

/**
 * Test pour modulo
 */
test("isOdd should return a boolean if x%2 != 0", () => {
    expect(isOdd(3)).toBe(true);
});

test("isEven should return a boolean if x%2 == 0", () => {
    expect(isEven(4)).toBe(false);
});

/**
 * Test pour square
 */
test("square should return the square of a number", () => {
    expect(square(3)).toBe(9);
});

/**
 * Test pour cube
 */
test("cube should return the cube of a number", () => {
    expect(cube(3)).toBe(27);
});

/**
 * Test pour type & surtype
 */
test("isGeometricShape should return rectangle", () => {
    const rectangle: Rectangle = {
        type: "Rectangle",
        width: 50,
        height: 50
    }
    expect(isGeometricShape(rectangle)).toBe("Rectangle");
});