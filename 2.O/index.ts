import { Circle } from "./src/models/Circle";
import { Square } from "./src/models/Square";
import { AreaCalculator } from "./src/services/AreaCalculator";
import { IShape } from "./src/interfaces/shape.interface";


const shapes: IShape[] = [new Square(5), new Circle(3)];
const calculator = new AreaCalculator(shapes);
calculator.sum();
