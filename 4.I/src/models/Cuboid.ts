import { ICalculateInterface } from "../interfaces/Calculate.interface";
import { IShapeInterface } from "../interfaces/Shape.interface";
import { IThreeDimensionalShapeInterface } from "../interfaces/ThreeDimnesionalShape.interface";
export class Cuboid implements IShapeInterface, IThreeDimensionalShapeInterface, ICalculateInterface {
    private readonly length: number;
    private readonly width: number;
    private readonly height: number;
    constructor(length: number, width: number, height: number) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    area(): number {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
    volume(): number {
        return this.length * this.width * this.height;
    }
    calculate(): number {
        return this.area();
    }
}