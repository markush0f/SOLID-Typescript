import { IGeometricShape } from "../interfaces/GeometricShape.interface";

export class Square implements IGeometricShape {
  private readonly side: number;
  constructor(side: number) {
    this.side = side;
  }
  calculateArea(): number {
    return this.side * this.side;
  }
  calculatePerimeter(): number {
    return 4 * this.side;
  }
}