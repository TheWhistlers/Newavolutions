export class SizeMatrix {
    width: number;
    height: number;

    constructor (width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public static create (width: number, height: number): SizeMatrix {
        return new SizeMatrix(width, height);
    }
}