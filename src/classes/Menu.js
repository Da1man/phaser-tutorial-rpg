import Phaser from 'phaser';


export default class Menu extends Phaser.GameObjects.Container {
  constructor(x, y, scene, heroes){
    super(scene, x, y);
    this.heroes = heroes
  }
}
