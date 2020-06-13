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

  update(time, delta) {
    this.player.move()
  }

}
