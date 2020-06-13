import Phaser from 'phaser';
import Map from '../classes/Map';
import Player from "../classes/Player";

export default class WorldScene extends Phaser.Scene {
  constructor() {
    super('WorldScene')
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  preload() {
  }

  create() {
    this.createMap();
    this.createPlayer();
    this.setCamera();

    this.createSpawns();

    this.createCollides();
    this.createOverlaps();
  }

  createMap() {
    this.map = new Map(this);
  }

  createPlayer() {
    this.player = new Player(this, 50, 100, 'player', 6);
  }

  setCamera() {
    // ограничиваем камеру размерами карты
    this.cameras.main.setBounds(0, 0, this.map.tilemap.widthInPixels, this.map.tilemap.heightInPixels);
    // заставляем камеру следовать за игроком
    this.cameras.main.startFollow(this.player.hero);
    //своего рода хак, чтобы предотвратить пояление полос в тайлах
    this.cameras.main.roundPixels = true;
  }

  createSpawns() {
    this.spawns = this.physics.add.group({classType: Phaser.GameObjects.Zone});
    for (let i = 0; i < 30; i++) {
      const x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
      const y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
      this.spawns.create(x, y, 20,20);
    }
    this.physics.add.overlap(this.player.hero, this.spawns, this.onMeetEnemy, false, this)
  }

  onMeetEnemy(player, zone) {
    // мы перемещаем зону в другое место
    zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
    zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);

    // встряхиваем мир
    this.cameras.main.flash(300)

    // начало боя
  }

  createCollides() {
    this.physics.add.collider(this.player.hero, this.map.obstacles);
  }

  createOverlaps() {
  }

  update(time, delta) {
    this.player.move()
  }

}
