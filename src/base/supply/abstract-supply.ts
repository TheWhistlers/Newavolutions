import { Rarity } from './rarity'

export abstract class AbstractSupply {
    name: string;
    rarity: Rarity;

    constructor (name: string, rarity: Rarity) {
        this.name = name;
        this.rarity = rarity;
    }
}