import 'phaser';
import { Scale, WEBGL } from 'phaser';
import { Homeland } from './scene/homeland'

const config: Phaser.Types.Core.GameConfig = {
    type: WEBGL,
    backgroundColor: '#9bd4c3',
    scene: [
        Homeland
    ],
    scale: {
        mode: Scale.ScaleModes.NONE,
        width: 1080,
        height: 1980,
      },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    render: {
        pixelArt: true
    }
};

class GameManager extends Phaser.Game {
    constructor () {
      super(config);
    }
}

new GameManager();