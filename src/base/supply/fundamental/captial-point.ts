import { AbstractSupply } from "../abstract-supply";
import { Rarity } from "../rarity";

export class CaptialPoint extends AbstractSupply {
    constructor () {
        super('capital', Rarity.SCARCE);
    }
}