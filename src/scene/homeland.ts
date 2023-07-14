import { Scene } from 'phaser';
import { MarchMap } from '../base/march-map'
import { MarchPoint } from '../base/march-point';
import { CharacterMain } from '../core/character/character-main';
import { FalconMain } from '../core/character/falcon/main';

export class Homeland extends Scene {
    constructor () {
        super({
            key: 'homeland'
        });
    }

    init () {

    }

    preload () {
        this.load.baseURL = '../../assets/';
        this.load.image('point', 'map/point.png');
        this.load.image('marcher', 'character/marcher.png');
    }

    create () {
        const map: MarchMap = new MarchMap(50, 50, 16, 16);
        const player: CharacterMain = new FalconMain(this, 0, 0);

        map.execute((point: MarchPoint, x: number, y: number) => {
            const go_point = this.add.sprite(x + ( x - 1 ) * point.size.width, 
                y + ( y - 1 ) * point.size.height, 'point').setOrigin(0, 0);
        });

        map.join(player);

    }

    update (time: number, delta: number) {
        
    }
}