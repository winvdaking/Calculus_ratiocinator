type Bird = {
    type: "Bird";
    fly: () => string;
};

type Fish = {
    type: "Fish";
    swim: () => string;
};

const nemo: Fish = {
    type: "Fish",
    swim: () => "~~~~~~~~"
};

type Animal = {
    name: string;
    kind: Bird | Fish;
};

type SuperAnimal = {
    name: string;
    kind:
    | { type: "Dragon"; power: "crache du feu"; fly: () => "fly" }
    | { type: "Licorne"; power: "génère des arc-en-ciel" }
    | {
        type: "Dev";
        power: "fait de la Programmation Fonctionnelle";
        code: () => "f(x)=>(y)=>x+y";
    };
};

type FantasyAnimal = Animal & {
    superpower: () => number;
};

const move = (animal: Fish | Bird) => {
    switch (animal.type) {
        case "Bird":
            const movement = animal.fly();
            animal.fly();
            break;
        case "Fish":
            animal.swim();
            break;
    }
};

move(nemo);

/**
 * Étape 3 
 */
export type Rectangle = {
    type: "Rectangle";
    width: number;
    height: number;
};

export type Circle = {
    type: "Circle";
    radius: number;
};

export type GeometricShape = Rectangle | Circle;

export const isGeometricShape = (shape: GeometricShape) => {
    switch (shape.type) {
        case ("Rectangle"):
            return "Rectangle";
        case ("Circle"):
            return "Circle";
    }
};

export const calculateArea = (shape: GeometricShape) => {
    switch (shape.type) {
        case ("Rectangle"):
            return shape.width * shape.height;
        case ("Circle"):
            return Math.PI * shape.radius ** 2;
    }
};

export type TriangleIsocele = {
    type: "TriangleIsocele";
    base: number;
    height: number;
}

export type TriangleEquilateral = {
    type: "TriangleEquilateral";
    base: number;
    height: number;
}

export type TriangleRectangle = {
    type: "TriangleRectangle";
    base: number;
    height: number;
}

export type Triangle = TriangleIsocele | TriangleEquilateral | TriangleRectangle;

export const calculateAreaBis = (shape: Triangle) => {
    switch (shape.type) {
        case ("TriangleIsocele"):
            return shape.base * shape.height / 2;
        case ("TriangleEquilateral"):
            return shape.base * shape.height / 2;
        case ("TriangleRectangle"):
            return shape.base * shape.height / 2;
    }
};