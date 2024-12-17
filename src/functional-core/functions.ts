/**
 * Étape 01 - Pure et totale
 */
export type BinaryMathOperation = (x: number, y: number) => number;

export const add: BinaryMathOperation = (x: number, y: number) => x + y;

export const multiply: BinaryMathOperation = (x: number, y: number) => x * y;

export const divide: BinaryMathOperation = (x: number, y: number) => x / y;

export const subtract: BinaryMathOperation = (x: number, y: number) => x - y;

/**
 * Étape 2 - Conversion de fonction binaire en fonction unitaire
 */
export type UnaryMathOperation = (x: number) => (y: number) => number;

export const unaryAdd: UnaryMathOperation = (x: number) => (y: number) => x + y;

export const unaryMultiply: UnaryMathOperation = (x: number) => (y: number) => x * y;

export const unaryDivide: UnaryMathOperation = (x: number) => (y: number) => x / y;

export const unarySubtract: UnaryMathOperation = (x: number) => (y: number) => x - y;

/**
 * Étape 3 - Composer une fonction incrementOf10 
 */
export const incrementOf10 = unaryAdd(10);

/**
 * Étape 4 - Composer une fonction ternaire
 */
export type TernaryMathOperationFn = (n: number, y: number, z: number) => number;

export const addThenMultiply: TernaryMathOperationFn = (x: number, y: number, z: number) => multiply(add(x, y), z);

/**
 * Étape 5 - Programmez une fonction calculator prenant en paramètre une fonction f de type 
 * UnaryMathOperation et appliquant la fonction à partir des 2 paramètres fournis à la suite.
 */
export const calculator = (fn: UnaryMathOperation) => (x: number) => (y: number) => fn(x);


/**
 * Étape 6 - 
 */
export type UnaryMathOperationsAggregator = (
    ...fns: UnaryMathOperation[]
) => (x: number) => (y: number) => number;

const composeNewMathOperation: UnaryMathOperationsAggregator =
    (...fns: UnaryMathOperation[]) =>
        (x: number) =>
            (y: number = x) =>
                fns.reduce((acc, curr: UnaryMathOperation) => curr(acc)(x), x);

const modulo: BinaryMathOperation = (x: number, y: number) => x % y;

const idOdd = (x: number) => modulo(x, 2) ? true : false;