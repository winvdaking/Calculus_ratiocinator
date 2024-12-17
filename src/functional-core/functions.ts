type NumberToNumber = (x: number) => number;

const increment: NumberToNumber = (x: number): number => x + 1;

export { increment, type NumberToNumber }