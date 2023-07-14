import { Physics, Scene } from 'phaser';
import { CharacterMain } from '../character-main';

export class FalconMain extends CharacterMain {

    constructor (scene: Scene, x: number, y: number) {
        super(scene, x, y, 'marcher');

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.cursors = this.scene.input.keyboard?.createCursorKeys()!;
    }

    update(...args: any[]): void {
        if (this.cursors.left.isDown) {

        }
    }
}