import { AbstractSupply } from "../../base/supply/abstract-supply";
import { Inventory } from "./inventory";

export abstract class AbstractUnit {
    name: string;
    isPlayer: boolean;
    inventory: Inventory;
    
    constructor (name: string, isPlayer: boolean) {
        this.name = name;
        this.isPlayer = isPlayer;
        this.inventory = new Inventory();
    }
}