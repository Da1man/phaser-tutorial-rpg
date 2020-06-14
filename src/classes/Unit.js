import Phaser from 'phaser';

export default class Unit extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame);
    this.scene = scene;
    this.type = type;
    this.maxHp = hp;
    this.hp = hp;
    this.damage = damage; // урон по умолчанию
  }

  attack(target){
    target.takeDamage(this.damage);
  }

  takeDamage(damage) {
    this.hp -= damage
  }


}
