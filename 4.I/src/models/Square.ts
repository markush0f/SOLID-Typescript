import { IShapeInterface } from "../interfaces/Shape.interface";
import { ICalculateInterface } from "../interfaces/Calculate.interface";

export class Square implements IShapeInterface, ICalculateInterface {
    private readonly side: number;
    constructor(side: number) {
        this.side = side;
    }
    area(): number {
        return this.side * this.side;
    }
    calculate(): number {
        return this.area();
    }
}