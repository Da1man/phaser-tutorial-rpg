import Menu from "./Menu";

export default class ActionsMenu extends Menu{
  constructor(x, y, scene){
    super(x, y, scene);
    this.addMenuItem('Атака');
  }

  confirm() {
    //  что делать, когда игрок выбирает действие
  }
}
