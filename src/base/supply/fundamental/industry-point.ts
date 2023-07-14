import { AbstractSupply } from "../abstract-supply";
import { Rarity } from "../rarity";

export class IndustryPoint extends AbstractSupply {
    constructor () {
        super('industry', Rarity.SCARCE);
    }
} 