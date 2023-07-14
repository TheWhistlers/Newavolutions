import { ClampedNumber } from "./math/clamped-number";
import { SizeMatrix } from "./math/size-matrix";
import { Occupation } from "./occupation";
import { AbstractUnit } from "../core/unit/abstract-unit";

export class MarchPoint {
    protected occupation: Occupation;
    height: ClampedNumber;
    size: SizeMatrix;
    owner: AbstractUnit | null;

    constructor (size: SizeMatrix) {
        this.height = new ClampedNumber(1, 5).setValue(1);
        this.size = size;

        this.occupation = Occupation.NONE;
        this.owner = null;
    }

    exchange (target: AbstractUnit) {
        this.occupation = target.isPlayer ? Occupation.ALLIANCE : Occupation.ENEMYS;
        this.owner = target;
    }
}