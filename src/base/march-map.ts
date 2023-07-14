import { CharacterMain } from "../core/character/character-main";
import { MarchPoint } from "./march-point";
import { SizeMatrix } from "./math/size-matrix";

export class MarchMap {
    mapArray: MarchPoint[][];
    playerList: CharacterMain[];
    constructor (rows: number, cols: number, width: number, height: number) {
        this.mapArray = [];
        this.playerList = [];

        for (let i = 0; i < rows; i++) {
            this.mapArray[i] = [];

            for (let j = 0; j < cols; j++) {
                this.mapArray[i][j] = new MarchPoint(SizeMatrix.create(width, height));
            }
         }
    }

    join (...joiner: CharacterMain[]) {
        this.playerList.push(...joiner);
    }

    execute (callBack: (point: MarchPoint, x: number, y: number) => void) {
        for (let x = 0; x < this.mapArray.length; x++) {
            for (let y = 0; y < this.mapArray[x].length; y++) {
                callBack(this.mapArray[x][y], x, y);
            }
        }
    }
}