import { ClampedNumber } from "../math/clamped-number";
import { AbstractSupply } from "./abstract-supply";

export class SupplyContainer {
    protected supply_type: AbstractSupply;
    amount: ClampedNumber;

    constructor (type: AbstractSupply, initial_value: number = 0) {
        this.supply_type = type;
        this.amount = new ClampedNumber(0, Infinity).setValue(initial_value);
    }

    getSupplyType (): AbstractSupply { return this.supply_type; }
}