import { SupplyContainer } from "../../base/supply/supply-container";

export class Inventory {
    private data: Array<SupplyContainer>;

    constructor () {}

    exists (name: string) {
        return (this.data.find(s => s.getSupplyType().name == name) != null);
    }

    execute (name: string, callBack: (s: SupplyContainer) => void) {
        const target = this.data.find(s => s.getSupplyType().name == name);

        if (target != undefined) {
            callBack(target);
        }
    }
}