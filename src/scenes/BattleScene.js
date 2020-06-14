import Phaser from 'phaser';
import PlayerCharacter from "../classes/PlayerCharacter";
import Enemy from "../classes/Enemy";

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super('BattleScene')
  }

  init() {

  }

  create() {
    // меняем фон на зеленый
    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');

    // персонаж игрока - warrior (воин)
    this.warrior = new PlayerCharacter(this, 250, 50, 'player', 1, 'Воин', 100, 20);
    this.add.existing(this.warrior);

    // персонаж игрока - mage (маг)
    this.mage = new PlayerCharacter(this, 250, 100, 'player', 4, 'Маг', 80, 8);
    this.add.existing(this.mage);

    this.dragonBlue = new Enemy(this, 50, 50, 'dragonBlue', null, 'Дракон', 50, 3);
    this.add.existing(this.dragonBlue);

    this.dragonOrange = new Enemy(this, 50, 100, 'dragonOrange', null, 'Дракон2', 50, 3);
    this.add.existing(this.dragonOrange);


    // массив с героями
    this.heroes = [this.warrior, this.mage];
    // массив с врагами
    this.enemies = [this.dragonBlue, this.dragonOrange];

    // массив с обеими сторонами, которые будут атаковать
    this.units = this.heroes.concat(this.enemies);


    // Одновременно запускаем сцену UI Scene 
    this.scene.launch('UIScene')
  }


}
