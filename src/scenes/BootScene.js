import Phaser from 'phaser';
import tilesPNG from '../assets/map/spritesheet.png';
import tileMapJson from '../assets/map/map.json';
import playerPNG from '../assets/RPG_assets.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
  }

  preload() {
    // тайлы для карты
    this.load.image('tiles', tilesPNG);

    // карта в json формате
    this.load.tilemapTiledJSON('map', tileMapJson);

    // наши два персонажа (я лично увидел 4-х персонажей)
    this.load.spritesheet('player', playerPNG, {frameWidth: 16, frameHeight: 16});
  }

    create()
    {
      this.scene.start('WorldScene')
    }
  }
