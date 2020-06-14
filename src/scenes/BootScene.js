import Phaser from 'phaser';
import tilesPNG from '../assets/map/spritesheet-extruded.png';
import tileMapJson from '../assets/map/map.json';
import playerPNG from '../assets/RPG_assets.png';
import dragonBlue from '../assets/dragonblue.png';
import dragonOrange from '../assets/dragonorrange.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
  }

  preload() {
    // тайлы для карты
    this.load.spritesheet('tiles', tilesPNG, {frameWidth: 18, frameHeight: 18});

    // карта в json формате
    this.load.tilemapTiledJSON('map', tileMapJson);

    // наши два персонажа (я лично увидел 4-х персонажей)
    this.load.spritesheet('player', playerPNG, {frameWidth: 16, frameHeight: 16});

    // Ресурсы врага

    this.load.image('dragonBlue', dragonBlue);
    this.load.image('dragonOrange', dragonOrange);
  }

    create()
    {
      // this.scene.start('WorldScene')
      this.scene.start('BattleScene')
    }
  }
