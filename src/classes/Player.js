import Phaser from 'phaser';

export default class Player {
  constructor(scene, x, y, spriteName, frame) {
    this.scene = scene;
    this.hero = this.scene.physics.add.sprite(x, y, spriteName, frame);
    this.hero.setCollideWorldBounds(true);
  }

  move() {
    this.hero.body.setVelocity(0);

    // горизонтальное перемещение
    if (this.scene.cursors.left.isDown) {
      this.hero.body.setVelocityX(-80);
    } else if (this.scene.cursors.right.isDown) {
      this.hero.body.setVelocityX(80);
    }

    // вертикальное перемещение
    if (this.scene.cursors.up.isDown) {
      this.hero.body.setVelocityY(-80)
    } else if (this.scene.cursors.down.isDown) {
      this.hero.body.setVelocityY(80)
    }
  }

}
