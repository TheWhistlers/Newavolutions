import { AbstractSupply } from "./abstract-supply";
import { Rarity } from "./rarity";
import { BasicMarket } from "../../core/market/basic-market"

export class FoodSupply extends AbstractSupply {
    constructor () {
        super('food', Rarity.NORMAL);
    }

    inSale (quantity: number) {
        const cp_earnings = quantity * BasicMarket.food_univalence * (1 - BasicMarket.food_tax_rate);
    }
}