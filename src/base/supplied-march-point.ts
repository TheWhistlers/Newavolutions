import { AbstractUnit } from "../core/unit/abstract-unit";
import { MarchPoint } from "./march-point";
import { ClampedNumber } from "./math/clamped-number";
import { SizeMatrix } from "./math/size-matrix";
import { AbstractSupply } from "./supply/abstract-supply";

export class SuppliedMarchPoint extends MarchPoint {
    product: AbstractSupply;
    produceTime: number;
    produceAmount: number;
    level: ClampedNumber;

    constructor (size: SizeMatrix, product: AbstractSupply, produceTime: number, produceAmount: number, level: ClampedNumber) {
        super(size);

        this.product = product;
        this.produceTime = produceTime;
        this.produceAmount = produceAmount;
        this.level = level;
        this.level.setValue(1);
    }

    produce (amount: number) {
        if (this.owner?.inventory.exists(this.product.name)) {
            this.owner?.inventory.execute(this.product.name, s => {
                s.amount.setValue(s.amount.getValue() + this.produceAmount);
            })
        }
    }
}