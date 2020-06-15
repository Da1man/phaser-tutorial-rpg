import Phaser from 'phaser';
import MenuItem from "./MenuItem";


export default class Menu extends Phaser.GameObjects.Container {
  constructor(x, y, scene, heroes){
    super(scene, x, y);
    this.scene = scene;
    this.heroes = heroes;
    this.menuItems = [];
    this.menuItemIndex = 0;
    this.x = x;
    this.y = y;
  }

  addMenuItem(unit) {
    const menuItem = new MenuItem(0, this.menuItems.length * 20, unit, this.scene);
    this.menuItems.push(menuItem);
    this.add(menuItem);
  }

  moveSelectionUp() {
    this.menuItems[this.menuItemIndex].deselect();
    this.menuItemIndex--;
    if (this.menuItemIndex < 0) {
      this.menuItemIndex = this.menuItems.length - 1;
      this.menuItems[this.menuItemIndex].select();
    }
  }

  moveSelectionDown() {
    this.menuItems[this.menuItemIndex].deselect();
    this.menuItemIndex++;
    if (this.menuItemIndex >= this.menuItems.length) {
      this.menuItemIndex = 0;
      this.menuItems[this.menuItemIndex].select();
    }
  }

  // выбрать меню целиком и элемент с индексом в нем
  select(index) {
    if (!index) {
      index = 0
    }
    this.menuItems[this.menuItemIndex].deselect();
    this.menuItemIndex = index;
    this.menuItems[this.menuItemIndex].select();
  }

  deselect() {
    this.menuItems[this.menuItemIndex].deselect();
    this.menuItemIndex = 0;
  }

  confirm() {
    // что делать, когда игрок подтверждает свой выбор
  }

  clear() {
    for (let i = 0; i < this.menuItems.length; i++) {
      this.menuItems[i].destroy();
    }
    this.menuItems.length = 0;
    this.menuItemIndex = 0;
  }

  remap(units) {
    this.clear();
    for (let i = 0; i < units.length; i++) {
      const unit = units[i];
      this.addMenuItem(unit.type)
    }
  }
}
