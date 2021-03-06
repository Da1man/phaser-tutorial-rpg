import Menu from "./Menu";

export default class EnemiesMenu extends Menu{
  constructor(x, y, scene){
    super(x, y, scene);
    this.scene = scene
  }

  confirm() {
    // do something when the player selects an enemy
    this.scene.events.emit("Enemy", this.menuItemIndex);
  }
}
