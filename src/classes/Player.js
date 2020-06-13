import Phaser from 'phaser';

export default class Player {
  constructor(scene, x, y, spriteName, frame) {
    this.scene = scene;
    this.hero = this.scene.physics.add.sprite(x, y, spriteName, frame);
    this.hero.setCollideWorldBounds(true);

    this.createMoveAnimations();
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

    this.playMoveAnimation();
  }

  createMoveAnimations() {
    // анимация клавиши 'left' для персонажа
    // мы используем одни и те же спрайты для левой и правой клавиши, просто зеркалим их
    this.scene.anims.create({
      key: 'left',
      frames: this.scene.anims.generateFrameNumbers('player', {frames:[1, 7, 1, 13]}),
      frameRate: 10,
      repeat: -1,
    })

    // анимация клавиши 'right' для персонажа
    this.scene.anims.create({
      key: 'right',
      frames: this.scene.anims.generateFrameNumbers('player', {frames:[1, 7, 1, 13]}),
      frameRate: 10,
      repeat: -1,
    })

    this.scene.anims.create({
      key: 'up',
      frames: this.scene.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14]}),
      frameRate: 10,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'down',
      frames: this.scene.anims.generateFrameNumbers('player', { frames: [ 0, 6, 0, 12 ] }),
      frameRate: 10,
      repeat: -1
    });
  }

  playMoveAnimation() {
    if (this.scene.cursors.left.isDown) {
      // В конце обновляем анимацию и устанавливаем приоритет анимации
      // left/right над анимацией up/down
      this.hero.anims.play('left', true);
      this.hero.flipX = true; //Разворачиваем спрайты персонажа вдоль оси X
    } else if (this.scene.cursors.right.isDown) {
      this.hero.anims.play('right', true);
      this.hero.flipX = false; //Отменяем разворот спрайтов персонажа вдоль оси X
    } else if (this.scene.cursors.up.isDown) {
      this.hero.anims.play('up', true);
    } else if (this.scene.cursors.down.isDown) {
      this.hero.anims.play('down', true);
    } else {
      this.hero.anims.stop()
    }
  };

}
