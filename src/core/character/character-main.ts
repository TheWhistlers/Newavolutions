import { Physics, Scene } from 'phaser';

export class CharacterMain extends Physics.Arcade.Sprite {
    protected cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor (scene: Scene, x: number, y: number, name: string) {
        super(scene, x, y, name);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.cursors = this.scene.input.keyboard?.createCursorKeys()!;
    }
}