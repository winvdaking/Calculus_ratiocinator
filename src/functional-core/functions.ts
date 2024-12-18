/**
 * @date 18-12-2024
 * @author Winv
 */

/**
 * Étape 02 - Pure et totale
 */
export type BinaryMathOperation = (x: number, y: number) => number;

export const add: BinaryMathOperation = (x: number, y: number) => x + y;

export const multiply: BinaryMathOperation = (x: number, y: number) => x * y;

export const divide: BinaryMathOperation = (x: number, y: number) => x / y;

export const subtract: BinaryMathOperation = (x: number, y: number) => x - y;

/**
 * Étape 3 - Conversion de fonction binaire en fonction unitaire
 */
export type UnaryMathOperation = (x: number) => (y: number) => number;

export const unaryAdd: UnaryMathOperation = (x: number) => (y: number) => x + y;

export const unaryMultiply: UnaryMathOperation = (x: number) => (y: number) => x * y;

export const unaryDivide: UnaryMathOperation = (x: number) => (y: number) => x / y;

export const unarySubtract: UnaryMathOperation = (x: number) => (y: number) => x - y;

/**
 * Étape 4 - Composer une fonction incrementOf10 
 */
export const incrementOf10 = unaryAdd(10);

/**
 * Étape 5 - Composer une fonction ternaire
 */
export type TernaryMathOperationFn = (n: number, y: number, z: number) => number;

export const addThenMultiply: TernaryMathOperationFn = (x: number, y: number, z: number) => unaryMultiply(unaryAdd(x)(y))(z);

/**
 * Étape 6 - Programmez une fonction calculator prenant en paramètre une fonction f de type 
 * UnaryMathOperation et appliquant la fonction à partir des 2 paramètres fournis à la suite.
 * Calculator permet de réaliser une injection de dépendance et appliquer la fonction en paramètre.
 */
export const calculator = (fn: UnaryMathOperation) => (x: number) => fn(x);

/**
 * Étape 7 - Programmez une méthode modulo pour isOdd et isEven
 */
type UnaryMathOperationsAggregator = (
    ...fns: UnaryMathOperation[]
) => (x: number) => (y: number) => number;

const composeNewMathOperation: UnaryMathOperationsAggregator =
    (...fns: UnaryMathOperation[]) =>
        (x: number) =>
            (y: number) =>
                fns.reduce((acc, curr: UnaryMathOperation) => curr(acc)(x), x);

const modulo: UnaryMathOperation = (x: number) => (y: number) => x % y;

export const isOdd = (x: number) => modulo(x)(0) !== 0;

export const isEven = (x: number) => modulo(x)(0) === 0;

/**
 * Étape 8 - Programmez une fonction square
 */
export const square = (x: number) => composeNewMathOperation(unaryMultiply)(x)(x);

export const cube = (x: number) => composeNewMathOperation(unaryMultiply, unaryMultiply)(x)(x);

/**
 * Étape 9 - Gérer l'exception de divide (0) : Employez une Monade de type Either (Left / Right) afin de gérer pour gérer ce
 * scénario en retournant une Erreur, sans déclencher d'exception
 */
// type UnaryMathOperationToEitherErrorNumber = (x: number) => (y: number) => Either<Error, number>;
// )
// export const divideSafe: BinaryMathOperation = (x: number, y: number) => y === 0 ? NaN : x / y;

