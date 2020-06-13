

export default class Map {
  constructor(scene) {
    this.scene = scene;
    this.init();
    this.create();
  }

  init() {
    this.tilemap = this.scene.make.tilemap({key: 'map'});
    this.tileset = this.tilemap.addTilesetImage('spritesheet', 'tiles');
    this.scene.physics.world.bounds.width = this.tilemap.widthInPixels;
    this.scene.physics.world.bounds.height = this.tilemap.heightInPixels;
  }

  create(){
    this.createLayers();
  }

  createLayers() {
    this.grass = this.tilemap.createStaticLayer('Grass', this.tileset, 0,0);
    this.obstacles = this.tilemap.createStaticLayer('Obstacles', this.tileset, 0,0);
    this.obstacles.setCollisionByExclusion([-1]);
  }
}
